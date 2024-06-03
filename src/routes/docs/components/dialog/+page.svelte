<script lang="ts">
	import { Button, Dialog } from '$lib/components';
	import { DocsPage, DocsCode, DocsNote, DocsPreview } from '$lib/components/page/docs';

	let showDialog = false;
</script>

<DocsPage title="Dialog">
	<p class="mb-6">
		In order to use <code>Dialog</code> (or any other of the 'common' components), you can
		import it from '$lib/components'.
	</p>

	<DocsCode
		class="mb-8"
		language="typescript"
		code={`import { Dialog } from '$lib/components';`} />

	<p class="mb-4">And then use it in your Svelte template:</p>

	<DocsCode
		class="mb-8"
		language="svelte"
		code={`
{#if showDialog}
    <Dialog
        type="danger"
        title="Danger"
        message="This is a danger dialog"
        submitText="Proceed"
        cancelText="Cancel"
        on:submit={() => { console.log('Proceed'); }}
        on:cancel={() => { console.log('Cancelled'); }} />
{/if}

`} />

	<DocsPreview class="mb-8">
		<div class="flex gap-2">
			<Button
				class="btn-outline border-base-200"
				on:click={() => (showDialog = !showDialog)}>
				Toggle dialog visibility
			</Button>

			{#if showDialog}
				<Dialog
					type="danger"
					title="Danger"
					message="This is a danger dialog"
					submitText="Proceed"
					cancelText="Cancel"
					on:submit={() => {
						console.log('Proceed');
						showDialog = false;
					}}
					on:cancel={() => {
						console.log('Cancelled');
						showDialog = false;
					}} />
			{/if}
		</div>
	</DocsPreview>

	<p class="mb-8">
		The Dialog component is a simple Svelte component that accepts the following props:
	</p>

	<DocsCode
		class="mb-8"
		language="typescript"
		code={`
type: 'danger' | 'warning' | 'info' | 'success' = 'info';
title: string;
message: string;
submitText: string;
cancelText: string = 'Cancel';

`} />
</DocsPage>
