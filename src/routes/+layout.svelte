<script lang="ts">
	import '../app.postcss';
	import { onMount } from 'svelte';
	import { invalidateAll } from '$app/navigation';
	import { supabase } from '$lib/supabase';
	import { Notifications } from '$lib/components';
	import { Theme, theme } from '$lib/stores/theme';
	import { browser } from '$app/environment';

	import GoogleAnalytics from '$lib/components/page/analytics/analytics.svelte';
	import NavigationHeader from '$lib/components/page/navigation-header/navigation-header.svelte';

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

<!--
    @do: Google Analytics script to track page views
    You can customize it to fit your needs.
    Fill in your PUBLIC_GOOGLE_ANALYTICS_MEASUREMENT_ID in .env
    to track you project. If you don't want to track it,
    remove this component.
-->
<GoogleAnalytics />

<!--
    Navigation header with the logo and the navigation links
    You can customize it to fit your needs.
-->
<NavigationHeader />

<!--
    Container for all the notifications
    which you can display from any page with
    the publicly exposed notify(type, message) method
-->
<Notifications />

<!-- Main content of the page -->
<slot />
