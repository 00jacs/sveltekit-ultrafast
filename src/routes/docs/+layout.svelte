<script lang="ts">
	import { page } from '$app/stores';
	import { browser } from '$app/environment';
	import { Button } from '$lib/components';
	import { theme, Theme, toggleTheme } from '$lib/stores/theme';
	import { Icon, Bars3, XMark, Sun, Moon } from 'svelte-hero-icons';

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
					title: 'Dialog',
					href: '/docs/components/dialog'
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

	let mobileMenuOpen = false;
	let isLightTheme = $theme === Theme.LIGHT;

	$: if (mobileMenuOpen && browser) {
		document.body.style.overflow = 'hidden';
	} else if (browser) {
		document.body.style.overflow = 'auto';
	}

	$: $page.url.pathname.startsWith('/docs') && (mobileMenuOpen = false);
</script>

<div class="flex h-full">
	<Button
		class="btn-ghost fixed left-3 top-3 z-50 bg-base-200 md:hidden"
		on:click={() => (mobileMenuOpen = !mobileMenuOpen)}>
		{#if mobileMenuOpen}
			<Icon src={XMark} class="h-6 w-6" />
		{:else}
			<Icon src={Bars3} class="h-6 w-6" />
		{/if}
	</Button>

	<nav
		id="navigation"
		class="left-0 top-0 z-40 hidden h-full w-64 flex-col justify-between overscroll-auto
            border-r-2 border-base-200 bg-base-200 bg-opacity-50 py-12 pl-8
            pr-12 md:fixed md:flex {mobileMenuOpen
			? '!fixed left-0 top-0 !block h-full w-full !bg-base-200'
			: ''}">
		<ul class="text-base-content-secondary">
			{#each list as item}
				<li class="relative mb-5 mt-4">
					<a
						href={item.href}
						class="link mb-3 block no-underline {$page.url.pathname === item.href
							? 'text-primary'
							: 'text-base-content-secondary'}"
						on:click={() => (mobileMenuOpen = false)}>
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

		<label class="swap swap-rotate mt-10">
			<input
				type="checkbox"
				class="hidden"
				checked={isLightTheme}
				on:change={toggleTheme} />

			<Icon src={Sun} class="swap-on h-5 w-5 fill-current" />
			<Icon src={Moon} class="swap-off h-5 w-5 fill-current" />
		</label>
	</nav>

	<main id="docs-content" class="w-[100%] p-8 md:absolute md:left-64 md:w-auto">
		<slot />
	</main>
</div>
