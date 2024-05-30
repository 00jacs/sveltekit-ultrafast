# Payments 💰

Stripe is the easiest payment provider to integrate into web applications.

## What do I need?

First, you should set up your Stripe account if you don't already have one. This is necessary to handle payments.

1. Stripe secret key
2. Stripe publishable key
3. Stripe webhook secret

The first two can be found here: https://dashboard.stripe.com/apikeys

### Webhook secret

Once your app is live, you can create an endpoint and generate a production webhook secret here: https://dashboard.stripe.com/webhooks

If you are developing your app locally, use this [guide](https://docs.stripe.com/webhooks) to generate a webhook secret.

In short:

1. Install Stripe CLI (depends on your OS)
2. Log in to your Stripe account - `stripe login`
3. Forward your webhook - `stripe listen --forward-to localhost:5173/payment/webhook` - a webhook secret should show up

### Filling the .env file

Once you have all 3 keys, you can fill in the `.env` file:

```makefile
PUBLIC_STRIPE_PUBLISHABLE_KEY="your stripe publishable key"
PRIVATE_STRIPE_SECRET_KEY="your stripe secret key"
PRIVATE_STRIPE_WEBHOOK_SECRET="your stripe webhook secret"
```

## How it works?

You generate a checkout session link in the `+page.server.ts` file. The user is then redirected to this page.

After the purchase has been completed, the `webhook/+server.ts` receives a `POST` request with the new payment status so that we know if it has been succesful or not.

We can process the payment however we want - we can input that into our Supabase database or we can just send an email - it's completely up to you and it's app-dependent.

## Ready-to-go pricing pages

You can use one of the fully implemented pricing pages (in the `/lib/components/page/pricing`).
