<script lang="ts">
	import { Icon, Check } from 'svelte-hero-icons';

	// @DO: Each of those should have a valid Stripe product ID
	// and the form should be handled in a way that it's done for `simple-one-time.svelte`
	// in the `src/routes/payment/+page.svelte` file.

	const plans = [
		{
			name: 'Freelancer',
			description: 'The essentials to provide your best work for clients.',
			price: 15,
			annualPrice: 100,
			features: [
				'5 products',
				'Up to 1,000 subscribers',
				'Basic analytics',
				'48-hour support response time'
			]
		},
		{
			name: 'Startup',
			description: 'A plan that scales with your rapidly growing business.',
			price: 30,
			annualPrice: 200,
			features: [
				'25 products',
				'Up to 10,000 subscribers',
				'Advanced analytics',
				'24-hour support response time',
				'Marketing automations'
			],
			cta: true // whether to mark this plan as the "most popular"
		},
		{
			name: 'Enterprise',
			description: 'Dedicated support and infrastructure for your company.',
			price: 60,
			annualPrice: 250,
			features: [
				'Unlimited products',
				'Unlimited subscribers',
				'Advanced analytics',
				'1-hour, dedicated support response time',
				'Marketing automations',
				'Custom reporting tools'
			]
		}
	];

	let isAnnual = false; // whether we show "monthly" or "annual" prices
</script>

<div class="py-24 sm:py-32">
	<div class="mx-auto max-w-7xl px-6 lg:px-8">
		<div class="mx-auto max-w-4xl text-center">
			<h2 class="text-base font-semibold leading-7 text-primary">Pricing</h2>
			<p class="mt-2 text-4xl font-bold tracking-tight sm:text-5xl">
				Pricing plans for teams of&nbsp;all&nbsp;sizes
			</p>
		</div>
		<p
			class="text-base-content-secondary mx-auto mt-6 max-w-2xl text-center text-lg leading-8">
			Choose an affordable plan that’s packed with the best features for engaging your
			audience, creating customer loyalty, and driving sales.
		</p>
		<div class="mt-16 flex justify-center">
			<fieldset aria-label="Payment frequency">
				<div
					class="grid grid-cols-2 gap-x-1 rounded-full p-1 text-center text-xs font-semibold leading-5 ring-1 ring-inset ring-base-200">
					<!-- Checked: "bg-indigo-600 text-white", Not Checked: "text-gray-500" -->

					<label
						class="cursor-pointer rounded-full px-2.5 py-1 {!isAnnual
							? 'bg-primary text-white'
							: 'text-base-content-secondary'}">
						<input
							type="radio"
							name="frequency"
							value="monthly"
							class="sr-only"
							on:click={() => (isAnnual = false)} />
						<span>Monthly</span>
					</label>
					<!-- Checked: "bg-indigo-600 text-white", Not Checked: "text-gray-500" -->
					<label
						class="cursor-pointer rounded-full px-2.5 py-1 {isAnnual
							? 'bg-primary text-white'
							: 'text-base-content-secondary'}">
						<input
							type="radio"
							name="frequency"
							value="annually"
							class="sr-only"
							on:click={() => (isAnnual = true)} />
						<span>Annually</span>
					</label>
				</div>
			</fieldset>
		</div>
		<div
			class="isolate mx-auto mt-10 grid max-w-md grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
			{#each plans as plan}
				<div
					class="rounded-3xl p-8 ring-1 {plan.cta
						? 'ring-primary'
						: 'ring-base-200'} xl:p-10">
					<div class="flex items-center justify-between gap-x-4">
						<h3
							id="tier-{plan.name.toLowerCase()}"
							class="text-lg font-semibold leading-8
                                {plan.cta ? 'text-primary' : ''}">
							{plan.name}
						</h3>

						{#if plan.cta}
							<p
								class="rounded-full bg-primary/10 px-2.5 py-1 text-xs font-semibold leading-5 text-primary">
								Most popular
							</p>
						{/if}
					</div>

					<p class="text-base-content-secondary mt-4 text-sm leading-6">
						{plan.description}
					</p>

					<p class="mt-6 flex items-baseline gap-x-1">
						<span class="text-4xl font-bold tracking-tight">
							${isAnnual ? plan.annualPrice : plan.price}
						</span>

						<span class="text-base-content-secondary text-sm font-semibold leading-6">
							{#if isAnnual}
								/year
							{:else}
								/month
							{/if}
						</span>
					</p>

					<a
						href="#"
						class="btn mt-6 w-full {plan.cta
							? 'btn-primary'
							: 'btn-outline border-base-200 text-primary'}">
						Buy plan
					</a>

					<ul
						role="list"
						class="text-base-content-secondary mt-8 space-y-3 text-sm leading-6 xl:mt-10">
						{#each plan.features as feature}
							<li class="flex gap-x-3">
								<Icon src={Check} class="h-6 w-5 flex-none text-primary" />
								{feature}
							</li>
						{/each}
					</ul>
				</div>
			{/each}
		</div>
	</div>
</div>
