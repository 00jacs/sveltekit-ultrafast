<script lang="ts">
	import HeroCentered from '$lib/components/page/hero/hero-centered.svelte';

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

<section id="examples" class="mx-auto max-w-2xl pb-16 text-center">
	<h2 class="mb-3 text-3xl font-bold">Example pages</h2>

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
