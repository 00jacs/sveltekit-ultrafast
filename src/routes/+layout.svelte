<script lang="ts">
	import '../app.postcss';
	import { onMount } from 'svelte';
	import { page } from '$app/stores';
	import { invalidateAll } from '$app/navigation';
	import { browser } from '$app/environment';

	import { supabase } from '$lib/supabase';
	import { Notifications } from '$lib/components';
	import { Theme, theme } from '$lib/stores/theme';

	import { PlausibleAnalytics, GoogleAnalytics } from '$lib/components/page/analytics';
	import NavigationHeader from '$lib/components/page/navigation-header/navigation-header.svelte';
	import MinimalFooter from '$lib/components/page/footer/minimal-footer.svelte';

	/**
	 * Listen for changes in authentication state
	 * and invalidate all pages when the user logs in or out
	 * DO NOT REMOVE THIS, IT'S IMPORTANT FOR THE AUTHENTICATION FLOW
	 */
	onMount(() => {
		const {
			data: { subscription }
		} = supabase.auth.onAuthStateChange(() => {
			invalidateAll();
		});

		return () => subscription?.unsubscribe();
	});

	export let data;

	if (data.theme === Theme.LIGHT || data.theme === Theme.DARK) {
		theme.set(data.theme);

		if (browser) {
			document.documentElement.setAttribute('data-theme', data.theme);
		}
	}
</script>

<svelte:head>
	<title>sveltekit-ultrafast</title>
</svelte:head>

<!--
    @do: Google Analytics script to track page views
    You can customize it to fit your needs.
    Fill in your PUBLIC_GOOGLE_ANALYTICS_MEASUREMENT_ID in .env
    to track you project. If you don't want to track it,
    remove this component. You can also use Plausible Analytics
    (which does not require a cookie consent).
-->

<!--
<GoogleAnalytics />
-->

<PlausibleAnalytics />

<!--
    Navigation header with the logo and the navigation links
    You can customize it to fit your needs.
-->
{#if !$page.url.pathname.startsWith('/docs')}
	<NavigationHeader />
{/if}

<!--
    Container for all the notifications
    which you can display from any page with
    the publicly exposed notify(type, message) method
-->
<Notifications />

<!-- Main content of the page -->
<slot />

<!--
    Minimal footer with links to the documentation,
    authentication, database, payments, blog, and analytics
    You can customize it to fit your needs.
-->
{#if !$page.url.pathname.startsWith('/docs')}
	<MinimalFooter />
{/if}
