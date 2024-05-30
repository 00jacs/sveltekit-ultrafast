<script lang="ts">
	const faq = [
		{
			id: 0,
			question: 'Who is this boilerplate for?',
			answer: `
                This boilerplate is for developers who want to build fast, modern web applications
                with SvelteKit, Tailwind CSS, and TypeScript who want to get started quickly and
                don't want to spend time setting up the project.
            `
		},
		{
			id: 1,
			question: 'Why sveltekit-ultrafast?',
			answer: `
                sveltekit-ultrafast is a blazing fast SvelteKit template with Tailwind CSS and TypeScript.
                It is designed to help you build start-ups quickly and efficiently with built-in
                authentication (Supabase), PostgreSQL database (Supabase), payments (Stripe), analytics (Google Analytics), 
                blog (Contentful), emails (MailGun), and a ready-to-go landing page.
            `
		},
		{
			id: 2,
			question: 'Why SvelteKit?',
			answer: `SvelteKit is a modern innovative framework for building web applications
                of all sizes, with a beautiful development experience and flexible filesystem-based routing.
                The performance is also much better than with other frameworks.`
		},
		{
			id: 3,
			question: 'How do I get started?',
			answer: `You can get started by cloning the repository,
                    reading the documentation, or by looking at the example pages.`
		}
	] as const;

	let open = 0;
</script>

<div class="join join-vertical w-full">
	{#each faq as { question, answer }, i}
		<div class="collapse join-item collapse-arrow border border-base-300">
			<input type="radio" bind:group={open} value={i} class="l-0 absolute w-full" />
			<div class="collapse-title font-semibold">
				{question}
			</div>
			{#if open === i}
				<div class="collapse-content text-sm">
					<p>{answer}</p>
				</div>
			{/if}
		</div>
	{/each}
</div>
