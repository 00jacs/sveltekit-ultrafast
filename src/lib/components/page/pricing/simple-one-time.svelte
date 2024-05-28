<script lang="ts">
	import { Button } from '$lib/components';
	import { Icon, Check } from 'svelte-hero-icons';

	const whatsIncluded = [
		'Private forum access',
		'Member resources',
		'Entry to annual conference',
		'Official member t-shirt'
	];
</script>

<div class="py-24 sm:py-32">
	<div class="mx-auto max-w-7xl px-6 lg:px-8">
		<div class="mx-auto max-w-2xl sm:text-center">
			<h2 class="text-3xl font-bold tracking-tight sm:text-4xl">
				Simple no-tricks pricing
			</h2>

			<!--
                @DO: Use ChatGPT 4o to generate this text with a query like (once you explain your offer):
                Generate 1-3 interesting sentences about my product and my offer: ...
            -->
			<p class="mt-6 text-lg leading-8">
				Distinctio et nulla eum soluta et neque labore quibusdam. Saepe et quasi iusto
				modi velit ut non voluptas in. Explicabo id ut laborum.
			</p>
		</div>
		<div
			class="mx-auto mt-16 max-w-2xl rounded-3xl ring-1 ring-base-200 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none">
			<div class="p-8 sm:p-10 lg:flex-auto">
				<h3 class="text-2xl font-bold tracking-tight">Lifetime membership</h3>

				<!--
                    @DO: Use ChatGPT 4o to generate this text with one
                    fitting your product and your offer.
                -->
				<p class="text-base-content-secondary mt-6 text-base leading-7">
					Lorem ipsum dolor sit amet consect etur adipisicing elit. Itaque amet indis
					perferendis blanditiis repellendus etur quidem assumenda.
				</p>
				<div class="mt-10 flex items-center gap-x-4">
					<h4 class="flex-none text-sm font-semibold leading-6 text-primary">
						What’s included
					</h4>
					<div class="h-px flex-auto bg-base-200"></div>
				</div>
				<ul
					role="list"
					class="text-base-content-secondary mt-8 grid grid-cols-1 gap-4 text-sm leading-6 sm:grid-cols-2 sm:gap-6">
					{#each whatsIncluded as benefit}
						<li class="flex gap-3">
							<Icon src={Check} class="h-6 w-5 flex-none text-primary" />
							{benefit}
						</li>
					{/each}
				</ul>
			</div>
			<div class="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
				<div
					class="rounded-2xl border border-base-300 py-10 text-center lg:flex lg:flex-col lg:justify-center lg:py-16">
					<div class="mx-auto max-w-xs px-8">
						<p class="text-base-content-secondary text-base font-semibold">
							Pay once, own it forever
						</p>
						<p class="mt-6 flex items-baseline justify-center gap-x-2">
							<span class="text-5xl font-bold tracking-tight">$349</span>
							<span
								class="text-base-content-secondary text-sm font-semibold leading-6 tracking-wide">
								USD
							</span>
						</p>
						<Button type="submit" class="btn-primary mt-10 w-full">Get access</Button>
						<p class="text-base-content-secondary mt-6 text-xs leading-5">
							Invoices and receipts available for easy company reimbursement
						</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
