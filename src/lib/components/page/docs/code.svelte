<script lang="ts">
	import { onMount } from 'svelte';
	import { scale } from 'svelte/transition';
	import { getHighlighter } from 'shiki';
	import { Icon, Clipboard } from 'svelte-hero-icons';
	import { Button } from '$lib/components';

	export let code = ''; // The code to highlight
	export let language: 'bash' | 'typescript' | 'javascript' = 'typescript'; // Default to JavaScript

	let className: string = '';
	export { className as class };

	let highlightedHtml = ''; // This will hold the HTML output from Shiki
	let showCopiedAlert = false;

	onMount(async () => {
		const highlighter = await getHighlighter({
			langs: ['html', 'css', 'js', 'ts', 'bash'],
			themes: ['nord']
		});

		highlightedHtml = highlighter.codeToHtml(code, {
			lang: language,
			theme: 'nord'
		});
	});

	function handleCopyCodeClick() {
		navigator && navigator?.clipboard?.writeText(code);
		showCopiedAlert = true;

		setTimeout(() => {
			showCopiedAlert = false;
		}, 1200);
	}
</script>

<div class="rounded {className}">
	<!-- Code Toolbar -->
	<div
		class="text-base-content-secondary flex items-center justify-between rounded-t
            border border-b-0 border-base-200 px-3 py-1 text-sm">
		<p>{language === 'bash' ? 'terminal' : language}</p>

		<div class="relative">
			<slot name="toolbar-header" />

			<Button class="btn btn-ghost -mr-0.5 !px-0.5 !py-1" on:click={handleCopyCodeClick}>
				<span class="sr-only">Copy code</span>
				<Icon src={Clipboard} class="h-5 w-5" />
			</Button>

			{#if showCopiedAlert}
				<div
					class="text-base-content-secondary absolute -right-6 -top-6 -mr-2 -mt-2
                        rounded-full bg-base-200 px-3 py-0.5"
					transition:scale={{ duration: 350 }}>
					Copied!
				</div>
			{/if}
		</div>
	</div>

	<div class="overflow-hidden rounded-b text-sm">
		{@html highlightedHtml}
	</div>
</div>

<style lang="postcss">
	/* Additional styling for ALL the code blocks */
	:global(.shiki) {
		font-family: 'Fira Code', monospace;
		overflow-x: auto;

		@apply px-4 py-2;
	}
</style>
