<script lang="ts">
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

<section id="hero" class="mx-auto my-12 max-w-2xl px-4 py-12 text-center">
	<h1 class="mb-3 text-4xl font-bold">
		Welcome to
		<span class="text-primary">sveltekit-ultrafast</span> ⚡️
	</h1>

	<p class="text-base-content-secondary mb-5">
		This boilerplate allows you to rapidly prototype a SvelteKit app for your next
		start-up.
	</p>

	<div class="flex justify-center gap-2">
		<a href="#do" class="btn btn-outline border-base-300">Follow on Twitter</a>
		<a href="/get-started" class="btn btn-primary">Get started</a>
	</div>
</section>

<section id="examples" class="mx-auto max-w-2xl text-center">
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
