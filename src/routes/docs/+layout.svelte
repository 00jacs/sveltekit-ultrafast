<script lang="ts">
	const list = [
		{
			title: 'Getting Started',
			href: '/docs/getting-started',
			children: [
				{
					title: 'Installation',
					href: '/docs/getting-started#installation'
				},
				{
					title: 'Configuration',
					href: '/docs/getting-started#configuration'
				},
				{
					title: 'Development',
					href: '/docs/getting-started#development'
				},
				{
					title: 'Deployment',
					href: '/docs/getting-started#deployment'
				}
			]
		},
		{
			title: 'FAQ',
			href: '/docs/faq'
		},
		{
			title: 'Credits',
			href: '/docs/credits'
		}
	];
</script>

<div class="flex h-full">
	<nav
		id="navigation"
		class="h-full max-w-96 border-r-2 border-base-200 bg-base-200 bg-opacity-50 py-12 pl-8 pr-12">
		<ul class="text-base-content-secondary">
			{#each list as item}
				<li class="relative mb-5 mt-4">
					<a
						href={item.href}
						class="text-base-content-secondary link mb-3 block no-underline">
						{item.title}
					</a>

					{#if item.children}
						<ul class="ml-4">
							{#each item.children as child}
								<li class="mb-2">
									<a
										href={child.href}
										class="text-base-content-secondary link no-underline">
										{child.title}
									</a>
								</li>
							{/each}
						</ul>
					{/if}
				</li>
			{/each}
		</ul>
	</nav>

	<main id="docs-content" class="p-8">
		<slot />
	</main>
</div>
