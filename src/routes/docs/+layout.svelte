<script lang="ts">
	import { page } from '$app/stores';

	interface DocsItem {
		title: string;
		href: string;
		children: {
			title: string;
			href: string;
		}[];
	}

	const list: DocsItem[] = [
		{
			title: 'Get started',
			href: '/docs/get-started',
			children: []
		},
		{
			title: 'Features',
			href: '/docs/features',
			children: [
				{
					title: 'Authentication',
					href: '/docs/features/authentication'
				},
				{
					title: 'Blog',
					href: '/docs/features/blog'
				},
				{
					title: 'Payments',
					href: '/docs/features/payments'
				},
				{
					title: 'Analytics',
					href: '/docs/features/analytics'
				},
				{
					title: 'Database',
					href: '/docs/features/database'
				}
			]
		},
		{
			title: 'Components',
			href: '/docs/components',
			children: [
				{
					title: '❗️ Read first',
					href: '/docs/components/read-first'
				},
				{
					title: 'Button',
					href: '/docs/components/button'
				},
				{
					title: 'Checkbox',
					href: '/docs/components/checkbox'
				},
				{
					title: 'Input number',
					href: '/docs/components/input-number'
				},
				{
					title: 'Input text',
					href: '/docs/components/input-text'
				},
				{
					title: 'Loader',
					href: '/docs/components/loader'
				},
				{
					title: 'Popover',
					href: '/docs/components/popover'
				},
				{
					title: 'Slideover',
					href: '/docs/components/slideover'
				}
			]
		}
	];
</script>

<div class="flex h-full">
	<nav
		id="navigation"
		class="fixed left-0 top-0 h-full w-64 overscroll-auto border-r-2 border-base-200 bg-base-200 bg-opacity-50 py-12 pl-8 pr-12">
		<ul class="text-base-content-secondary">
			{#each list as item}
				<li class="relative mb-5 mt-4">
					<a
						href={item.href}
						class="link mb-3 block no-underline {$page.url.pathname === item.href
							? 'text-primary'
							: 'text-base-content-secondary'}">
						{item.title}
					</a>

					{#if item.children && item.children.length}
						<ul class="ml-4">
							{#each item.children as child}
								<li class="mb-2">
									<a
										href={child.href}
										class="link no-underline
                                            {$page.url.pathname === child.href
											? 'text-primary'
											: 'text-base-content-secondary'}">
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

	<main id="docs-content" class="absolute left-64 p-8">
		<slot />
	</main>
</div>
