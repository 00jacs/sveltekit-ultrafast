import { fail, redirect, type Actions } from '@sveltejs/kit';
import Stripe from 'stripe';
import { PUBLIC_DOMAIN_URL } from '$env/static/public';
import { PRIVATE_STRIPE_SECRET_KEY } from '$env/static/private';
import logger from '$lib/utils/logger';

const stripe = new Stripe(PRIVATE_STRIPE_SECRET_KEY);

export const actions: Actions = {
	checkout: async () => {
		let sessionUrl: string | null = '';
		let error: string = '';

		try {
			const session = await stripe.checkout.sessions.create({
				line_items: [
					{
						// Provide the exact Price ID (for example, pr_1234) of the product you want to sell
						price: 'price_1PKhjIBFGbeGEVoTsRLhHsvE',
						quantity: 1
					}
				],
				mode: 'payment',
				success_url: `${PUBLIC_DOMAIN_URL}/?success=true`,
				cancel_url: `${PUBLIC_DOMAIN_URL}/?canceled=true`
			});

			if (!session.url) {
				error = 'Could not initialize a payment. Please try again later.';
			}

			logger.success('Stripe session created successfully');
			sessionUrl = session.url;
		} catch (err) {
			logger.error('An error occurred when initializing checkout: ', err);
		}

		if (error) {
			return fail(500, { message: error });
		}

		if (!sessionUrl) {
			return fail(500, {
				message: 'The checkout session could not be generated. Please try again later'
			});
		}

		return redirect(303, sessionUrl);
	}
};
