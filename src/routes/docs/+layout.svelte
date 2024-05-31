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
			title: 'FAQ',
			href: '/docs/faq',
			children: []
		},
		{
			title: 'Credits',
			href: '/docs/credits',
			children: []
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
						class="link mb-3 block no-underline {$page.url.pathname.startsWith(item.href)
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

	<main id="docs-content" class="absolute left-64 p-8">
		<slot />
	</main>
</div>
