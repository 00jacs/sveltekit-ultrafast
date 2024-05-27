import Stripe from 'stripe';
import {
	PRIVATE_STRIPE_SECRET_KEY,
	PRIVATE_STRIPE_WEBHOOK_SECRET
} from '$env/static/private';
import { json, type RequestHandler } from '@sveltejs/kit';
import logger from '$lib/utils/logger';

const stripe = new Stripe(PRIVATE_STRIPE_SECRET_KEY);

function fulfillOrder(lineItems: Stripe.ApiList<Stripe.LineItem>) {
	console.log('Fullfilling order: ', lineItems);
}

export const POST: RequestHandler = async ({ request }) => {
	logger.info('[payment webhook] Received a webhook request from Stripe.');
	const signature = request.headers.get('stripe-signature');
	const rawBody = await request.text();

	if (!request.body) {
		logger.error('[payment webhook] No request body has been provided');
		return json({ received: false });
	}

	if (!signature) {
		logger.error('[payment webhook] No Stripe signature has been provided');
		return json({ received: false });
	}

	let event: Stripe.Event;

	try {
		if (!request.body) throw new Error('No request body');

		event = stripe.webhooks.constructEvent(
			rawBody,
			signature,
			PRIVATE_STRIPE_WEBHOOK_SECRET
		);

		logger.success('[payment webhook] Constructed a Stripe webhook event');
	} catch (err) {
		logger.error('[payment webhook] Could not construct a Stripe webhook event', err);
		return new Response(
			JSON.stringify({
				error: 'Could not construct a Stripe webhook event'
			}),
			{ status: 500 }
		);
	}

	// Handle different types of events here
	switch (event.type) {
		case 'checkout.session.completed':
			logger.info('[payment webhook] Received a checkout session completed event');
			break;
		case 'invoice.paid':
			logger.info('[payment webhook] Received an invoice paid event');
			break;
		case 'invoice.payment_failed':
			logger.info('[payment webhook] Received an invoice payment failed event');
			break;
		default:
			logger.warn('[payment webhook] Received an unhandled event');
			break;
	}

	if (event.type === 'checkout.session.completed') {
		const sessionWithItems = await stripe.checkout.sessions.retrieve(
			event.data.object.id,
			{
				expand: ['line_items']
			}
		);

		const lineItems = sessionWithItems.line_items;
		if (!lineItems) return json({ received: false });
		fulfillOrder(lineItems);
	}

	return json({ received: true });
};
