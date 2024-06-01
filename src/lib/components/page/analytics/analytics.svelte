<script lang="ts">
	import { page } from '$app/stores';
	import { browser } from '$app/environment';
	import { PUBLIC_GOOGLE_ANALYTICS_MEASUREMENT_ID } from '$env/static/public';

	if (browser && typeof gtag !== 'undefined') {
		gtag('config', PUBLIC_GOOGLE_ANALYTICS_MEASUREMENT_ID, {
			page_title: document.title,
			page_path: $page.url.pathname
		});
	}
</script>

<svelte:head>
	<script
		async
		src="https://www.googletagmanager.com/gtag/js?id={PUBLIC_GOOGLE_ANALYTICS_MEASUREMENT_ID}">
	</script>
	<script>
		window.dataLayer = window.dataLayer || [];

		function gtag() {
			dataLayer.push(arguments);
		}

		gtag('js', new Date());

		/*
		 * @DO: Replace {PUBLIC_GOOGLE_ANALYTICS_MEASUREMENT_ID} with your own
		 * measurement ID, e.g. G-XXXXXXXXXX
		 * Scripts in Svelte are not reactive and thus we can't use $env
		 * to access the environment variables easily here.
		 */
		gtag('config', '{PUBLIC_GOOGLE_ANALYTICS_MEASUREMENT_ID}');
	</script>
</svelte:head>
