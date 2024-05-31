<script lang="ts">
	import { Icon, PaintBrush, LockClosed, CurrencyDollar } from 'svelte-hero-icons';

	const title = 'Deploy faster';
	const subtitle = 'Prototype your apps with ready-to-go components.';
	const description: string | null = null;

	const features = [
		{
			icon: PaintBrush,
			name: 'Develop UI 10x faster.',
			description: `
                With ready to go components and Daisy UI + Tailwind already set up,
                you can build your application 10 times faster than before.
            `
		},
		{
			icon: LockClosed,
			name: 'Authenticate users in seconds.',
			description: `
                With Supabase Auth, you can authenticate users in seconds and
                get started with building your application right away.
            `
		},
		{
			icon: CurrencyDollar,
			name: 'Accept payments with Stripe.',
			description: `
                Everything you need to start accepting payments with Stripe is already set up.
            `
		}
	] as const;
</script>

<div class="overflow-hidden py-20 sm:py-28">
	<div class="mx-auto max-w-7xl px-6 lg:px-8">
		<div
			class="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
			<div class="lg:pr-8 lg:pt-4">
				<div class="lg:max-w-lg">
					<h2 class="text-base font-semibold leading-7 text-primary">
						{title}
					</h2>

					<p class="mt-2 text-4xl font-bold tracking-tight sm:text-4xl">
						{subtitle}
					</p>

					{#if description}
						<p class="text-base-content-secondary mt-6 text-lg leading-8">
							{description}
						</p>
					{/if}

					<dl
						class="text-base-content-secondary mt-10 max-w-xl space-y-8 text-base leading-7 lg:max-w-none">
						{#each features as feature}
							<div class="relative pl-9">
								<dt class="inline font-semibold text-primary">
									<Icon
										class="absolute left-1 top-1 h-5 w-5 text-primary"
										src={feature.icon} />
									{feature.name}
								</dt>
								<dd class="inline">
									{feature.description}
								</dd>
							</div>
						{/each}
					</dl>
				</div>
			</div>

			<!-- @DO: Replace your image source and alt tag -->
			<enhanced:img
				src="$lib/assets/database-example.png"
				alt=""
				class="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-base-200 sm:w-[57rem] md:-ml-4 lg:-ml-0" />
		</div>
	</div>
</div>
