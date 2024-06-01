<script context="module">
	export const prerender = true;
</script>

<script>
	import { onMount } from 'svelte';
	import { PUBLIC_DOMAIN_URL } from '$env/static/public';

	onMount(() => {
		if (PUBLIC_DOMAIN_URL && typeof window !== 'undefined') {
			const domainWithoutProtocol = PUBLIC_DOMAIN_URL.replace(/(^\w+:|^)\/\//, '').trim();

			const script = document.createElement('script');
			script.defer = true;
			script.setAttribute('data-domain', domainWithoutProtocol);
			script.src = 'https://plausible.io/js/plausible.js';
			document.head.appendChild(script);
		}
	});
</script>
