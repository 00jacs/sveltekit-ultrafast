<script lang="ts">
	import '../app.postcss';
	import { onMount } from 'svelte';
	import { invalidateAll } from '$app/navigation';
	import { supabase } from '$lib/supabase';
	import { Notifications } from '$lib/components';
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

	let theme: 'dark' | 'light' = 'dark';

	function toggleTheme() {
		theme = theme === 'light' ? 'dark' : 'light';
		document.documentElement.setAttribute('data-theme', theme);
	}
</script>

<!--
    Navigation header with the logo and the navigation links
    You can customize it to fit your needs.
-->
<!--
<NavigationHeader />
-->

<!--
    Container for all the notifications
    which you can display from any page with
    the publicly exposed notify(type, message) method
-->
<Notifications />

<!-- Main content of the page -->
<button on:click={toggleTheme} class="btn btn-primary">
	Switch to {theme === 'light' ? 'dark' : 'light'}
</button>

<slot />
