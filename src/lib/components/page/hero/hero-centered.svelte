<script lang="ts">
	const hero = {
		title: 'sveltekit-ultrafast ⚡️',
		subtitle: `A blazing fast SvelteKit boilerplate with TailwindCSS, DaisyUI & TypeScript.
            Authentication (Supabase), payments (Stripe), blog (Contentful) are ready-to-go.`,
		note: {
			text: 'See how it helps you build start-ups',
			link: 'https://x.com/jacob_the_coder',
			linkText: 'here'
		},
		secondaryButton: {
			text: 'Follow on Twitter',
			link: 'https://twitter.com/jacob_the_coder'
		},
		ctaButton: {
			text: 'Get started',
			link: '/docs'
		}
	} as const;
</script>

<div class="mx-auto max-w-2xl px-8 py-16 sm:py-24 lg:py-32">
	<div class="hidden sm:mb-8 sm:flex sm:justify-center">
		<div
			class="text-base-content-secondary relative rounded-full px-3
                    py-1 text-sm leading-6 ring-1 ring-base-300">
			{hero.note.text}
			<a href={hero.note.link} target="_blank" class="font-semibold text-primary">
				{hero.note.linkText}
			</a>
		</div>
	</div>
	<div class="text-center">
		<h1 class="text-4xl font-bold leading-tight tracking-tight sm:text-6xl">
			{hero.title}
		</h1>
		<p class="text-base-content-secondary mt-6 leading-8">
			{hero.subtitle}
		</p>
		<div class="mt-10 flex items-center justify-center gap-x-6">
			<a
				href={hero.secondaryButton.link}
				target="_blank"
				class="link text-sm font-semibold leading-6 no-underline">
				{hero.secondaryButton.text}
			</a>

			<a href={hero.ctaButton.link} class="btn btn-primary font-semibold">
				{hero.ctaButton.text}
			</a>
		</div>
	</div>
</div>
