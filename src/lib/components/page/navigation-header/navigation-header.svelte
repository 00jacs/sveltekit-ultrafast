<script lang="ts">
	import { fade } from 'svelte/transition';
	import { page } from '$app/stores';
	import { Bars3, Icon, Plus, XMark } from 'svelte-hero-icons';
	import { Button } from '$lib/components';

	// @DO: Replace those links with your own
	const links = [
		{
			name: 'What is it?',
			href: '/'
		},
		{
			name: 'Pricing',
			href: '/team'
		},
		{
			name: 'Contact',
			href: '/contact'
		},
		{
			name: 'Login',
			href: '/auth/login'
		}
	] as const;

	let mobileMenuOpen = false;
</script>

<nav class="bg-base-200">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="flex h-16 justify-between">
			<div class="flex">
				<div class="-ml-2 mr-4 flex items-center md:hidden">
					<!-- Mobile menu button -->
					<Button
						type="button"
						class="bg-transparent shadow-none"
						on:click={() => (mobileMenuOpen = !mobileMenuOpen)}
						aria-controls="mobile-menu"
						aria-expanded="false">
						<Icon
							src={Bars3}
							class="h-6 w-6 {mobileMenuOpen ? 'hidden' : 'block'}"
							stroke-width="1.5"
							stroke="currentColor"
							aria-hidden="true" />

						<Icon
							src={XMark}
							class="h-6 w-6 {mobileMenuOpen ? 'block' : 'hidden'}"
							fill="currentColor"
							aria-hidden="true" />
					</Button>
				</div>
				<div class="flex flex-shrink-0 items-center">
					<enhanced:img
						class="h-8 w-auto"
						src="$lib/assets/logo.svg"
						alt="@DO: Fill your company name" />
				</div>
				<div class="hidden md:ml-6 md:flex md:items-center md:space-x-4">
					{#each links as link}
						<a
							href={link.href}
							class="rounded-md px-3 py-2 text-sm font-medium hover:bg-base-300
                                {$page.url.pathname === link.href ? 'text-primary' : ''}">
							{link.name}
						</a>
					{/each}
				</div>
			</div>
			<div class="flex items-center gap-2">
				<!-- @DO: This is a space for your CTA -->
				<Button type="button" class="btn-primary flex-shrink-0 text-sm">
					<Icon src={Plus} class="-ml-0.5 h-4 w-4" fill="currentColor" aria-hidden="true">
					</Icon>
					Add project
				</Button>

				<!--
                    @DO: Replace those social media links with your own.
                    You can also add more social media links here.
                    Or completely get rid of this section.
                -->
				<a
					href="@DO:your-facebook-link"
					class="btn btn-outline border-base-300"
					target="_blank">
					<enhanced:img src="$lib/assets/icons/facebook.svg" class="h-5 w-5" />
				</a>

				<a
					href="@DO:your-twitter-link"
					class="btn btn-outline border-base-300"
					target="_blank">
					<enhanced:img src="$lib/assets/icons/twitter.svg" class="h-5 w-5" />
				</a>

				<a
					href="@DO:your-github-link"
					class="btn btn-outline border-base-300"
					target="_blank">
					<enhanced:img src="$lib/assets/icons/github.svg" class="h-6 w-6" />
				</a>
			</div>
		</div>
	</div>

	<!-- Mobile menu, show/hide based on menu state. -->
	{#if mobileMenuOpen}
		<div class="absolute w-full md:hidden" id="mobile-menu" transition:fade>
			<div class="space-y-1 bg-base-100 px-2 pb-3 pt-2 shadow sm:px-3">
				<!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
				{#each links as link}
					<a
						href={link.href}
						class="block rounded-md px-3 py-2 text-base font-medium hover:bg-base-300
                            {$page.url.pathname === link.href
							? 'pointer-events-none bg-primary text-primary-content hover:text-primary'
							: ''}">
						{link.name}
					</a>
				{/each}
			</div>
		</div>
	{/if}
</nav>
