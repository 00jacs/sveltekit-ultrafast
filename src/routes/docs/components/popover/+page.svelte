<script lang="ts">
	import { Button, Popover } from '$lib/components';
	import { DocsPage, DocsCode, DocsPreview } from '$lib/components/page/docs';

	let popoverOpen = false;
</script>

<DocsPage title="Popover">
	<p class="mb-6">To use the Popover component, import it from '$lib/components'.</p>

	<DocsCode
		class="mb-8"
		language="typescript"
		code={`import { Popover } from '$lib/components';`} />

	<p class="mb-4">Then, use it in your Svelte template:</p>

	<DocsCode
		class="mb-8"
		language="html"
		code={`
<Button on:click={() => popoverOpen = true}>Open Popover</Button>

<Popover open={popoverOpen} on:close={() => popoverOpen = false} withCloseIcon={true}>
	<p>This is a popover content.</p>
</Popover>

`} />

	<DocsPreview class="mb-8">
		<Button class="btn-primary" on:click={() => (popoverOpen = true)}>
			Open Popover
		</Button>

		<Popover
			open={popoverOpen}
			on:close={() => (popoverOpen = false)}
			withCloseIcon={true}
			class="custom-popover-class">
			<p>This is the popover!</p>
		</Popover>
	</DocsPreview>

	<p class="mb-8">
		The Popover component is a flexible Svelte component that accepts several props:
	</p>

	<DocsCode
		class="mb-8"
		language="typescript"
		code={`
open: boolean; // you can use bind:open
id: string | undefined = undefined;

// you can also disable this by setting it to false
// and display the icon in the popover container yourself
withCloseIcon = true; // whether to show the "close icon"

class: string = ''; // class to apply on popover

`} />

	<p class="mb-8">
		The Popover component is based on
		<a
			href="https://daisyui.com/components/modal/"
			class="link link-primary"
			target="_blank">
			DaisyUI modal
		</a>
		so for more customization options, you can refer to their documentation.
	</p>
</DocsPage>
