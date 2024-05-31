<script lang="ts">
	import { DocsCode, DocsNote, DocsPage } from '$lib/components/page/docs';
</script>

<DocsPage
	title="Payments with Stripe"
	subtitle="Here you will learn about how to set up your payments with Stripe.
        Good news: most of the code is fully ready!">
	<div class="mb-12">
		<h2 class="mb-4 text-xl font-bold text-base-content">
			Step 1: create your Stripe account
		</h2>

		<p class="mb-4">
			In order to start, you need to create a Stripe account. You can do that
			<a href="https://stripe.com" target="_blank">here.</a>
		</p>
	</div>

	<div class="mb-12">
		<h2 class="mb-4 text-xl font-bold text-base-content">Step 2: get the API keys</h2>

		<p class="mb-4">
			After you have created a project, you need to get the API keys and fill in the
			`.env` file in the root of the project.
		</p>

		<DocsCode
			language="bash"
			code={`
PUBLIC_STRIPE_PUBLISHABLE_KEY="your stripe publishable key"
PRIVATE_STRIPE_SECRET_KEY="your stripe secret key"
PRIVATE_STRIPE_WEBHOOK_SECRET="your stripe webhook secret"
        `} />

		<DocsNote class="mt-8">
			The `PRIVATE_STRIPE_WEBHOOK_SECRET` is used to verify the webhook events from
			Stripe. In production, you can get it from the Stripe dashboard. In development, you
			can use the Stripe CLI and run the `stripe listen --forward-to
			localhost:3000/api/webhooks` command to get the temporary development secret.
		</DocsNote>
	</div>

	<div class="mb-12">
		<h2 class="mb-4 text-xl font-bold text-base-content">Step 3: create your products</h2>

		<p class="mb-4">
			Create your products with titles, descriptions, images and prices on Stripe.
		</p>

		<p>
			Then, get the product IDs for each of the product and create your own custom pricing
			page based on one of the provided templates in `/src/lib/components/page/pricing`.
		</p>
	</div>

	<p>
		Take a look at the `/routes/payment` route to see how the payments are handled and how
		you can integrate them into your own project.
	</p>
</DocsPage>
