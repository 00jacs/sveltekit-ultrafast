<script lang="ts">
	import '../app.postcss';
	import { onMount } from 'svelte';
	import { invalidateAll } from '$app/navigation';
	import { supabase } from '$lib/supabase';
	import { Notifications } from '$lib/components';

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
</script>

<!--
    Container for all the notifications
    which you can display from any page with
    the publicly exposed notify(type, message) method
-->
<Notifications />

<!-- Main content of the page -->
<slot />
