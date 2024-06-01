<script lang="ts">
	/* Overview: The /components/page folder contains a base of
	 * ready-to-go components that you can use to create a landing page
	 * and your application overall. The components are designed to be
	 * reusable and easy to understand. You can use them as they are or
	 * modify them to fit your needs.
	 *
	 * More components will be added in the future, so stay tuned!
	 */
	import HeroCentered from '$lib/components/page/hero/hero-centered.svelte';
	import FaqAccordion from '$lib/components/page/faq/faq-accordion.svelte';
	import FeaturesLeftWithImage from '$lib/components/page/features/features-left-with-image.svelte';

	const examplePages = [
		{
			name: 'PostgreSQL database with Supabase',
			href: '/database-example'
		},
		{
			name: 'Authentication with Supabase Auth',
			href: '/auth/login'
		},
		{
			name: 'Payments with Stripe',
			href: '/payment'
		},
		{
			name: 'Blog with Contentful',
			href: '/blog'
		},
		{
			name: 'Tracking events with Google Analytics',
			href: '/analytics'
		}
	] as const;
</script>

<HeroCentered />

<section id="examples" class="mx-auto mb-8 max-w-2xl pb-16 pt-16 text-center">
	<h2 class="mb-3 text-2xl font-bold md:text-4xl">Example pages</h2>
	<ul>
		{#each examplePages as page}
			<li class="mb-2">
				<a href={page.href} class="text-base-content-secondary link no-underline">
					{page.name}
				</a>
			</li>
		{/each}
	</ul>
</section>

<section id="features">
	<FeaturesLeftWithImage />
</section>

<section id="faq" class="mx-auto mt-16 max-w-xl px-8 py-16">
	<h2 class="mb-2 text-2xl font-bold md:text-4xl">Commonly asked questions</h2>
	<p class="text-base-content-secondary mb-8">
		If your question is not on the list, feel free to get in touch
		<a href="https://x.com/jacob_the_coder" class="link" target="_blank">here</a>
		or open up an issue on
		<a
			href="https://github.com/jacobxcoder/sveltekit-ultrafast/issues"
			class="link"
			target="_blank">
			GitHub.
		</a>
	</p>
	<FaqAccordion />
</section>
