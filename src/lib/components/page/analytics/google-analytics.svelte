<script context="module" lang="ts">
	export const prerender = true;
</script>

<script lang="ts">
	import { onMount } from 'svelte';
	import { PUBLIC_GOOGLE_ANALYTICS_MEASUREMENT_ID } from '$env/static/public';

	type GoogleAnalyticsWindow = Window & { dataLayer: any[] };

	onMount(() => {
		if (PUBLIC_GOOGLE_ANALYTICS_MEASUREMENT_ID && typeof window !== 'undefined') {
			(window as unknown as GoogleAnalyticsWindow).dataLayer =
				(window as unknown as GoogleAnalyticsWindow).dataLayer || [];

			function gtag(...args: any) {
				(window as unknown as GoogleAnalyticsWindow).dataLayer.push(arguments);
			}

			gtag('js', new Date());
			gtag('config', PUBLIC_GOOGLE_ANALYTICS_MEASUREMENT_ID);

			const script = document.createElement('script');
			script.async = true;
			script.src = `https://www.googletagmanager.com/gtag/js?id=${PUBLIC_GOOGLE_ANALYTICS_MEASUREMENT_ID}`;
			document.head.appendChild(script);
		}
	});
</script>
