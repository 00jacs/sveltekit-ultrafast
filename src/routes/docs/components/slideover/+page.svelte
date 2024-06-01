<script lang="ts">
	import { Button, Slideover } from '$lib/components';
	import { DocsPage, DocsCode, DocsPreview } from '$lib/components/page/docs';

	let slideoverOpen = false;

	function handleSave() {
		console.log('Save action');
		slideoverOpen = false;
	}

	function handleCancel() {
		console.log('Cancel action');
		slideoverOpen = false;
	}
</script>

<DocsPage title="Slideover">
	<p class="mb-6">To use the Slideover component, import it from '$lib/components'.</p>

	<DocsCode
		class="mb-8"
		language="typescript"
		code={`import { Slideover } from '$lib/components';`} />

	<p class="mb-4">Then, use it in your Svelte component:</p>

	<DocsCode
		class="mb-8"
		language="typescript"
		code={`
let slideoverOpen = false;

function handleSave() {
    console.log('Save action');
    slideoverOpen = false;
}

function handleCancel() {
    console.log('Cancel action');
    slideoverOpen = false;
}

`} />

	<p class="mb-4">And render in your template:</p>

	<DocsCode
		class="mb-8"
		language="html"
		code={`
<Button on:click={() => slideoverOpen = true}>Open Slideover</Button>

<Slideover
    bind:open={slideoverOpen}
    title="Slideover Title"
    subtitle="This is a subtitle."
    on:save={handleSave}
    on:cancel={handleCancel}
    cancelText="Close"
    submitText="Submit">
	<p>This is the content of the slideover.</p>
</Slideover>

`} />

	<DocsPreview class="mb-8">
		<Button class="btn-primary" on:click={() => (slideoverOpen = true)}>
			Open Slideover
		</Button>

		<Slideover
			bind:open={slideoverOpen}
			title="Slideover Title"
			subtitle="This is a subtitle."
			on:save={handleSave}
			on:cancel={handleCancel}
			cancelText="Close"
			submitText="Submit">
			<p>This is the content of the slideover.</p>
		</Slideover>
	</DocsPreview>

	<p class="mb-8">
		The Slideover component uses a sliding panel to display content. It supports several
		props for customization:
	</p>

	<DocsCode
		class="mb-8"
		language="typescript"
		code={`
open: boolean;
title: string;
subtitle: string = '';
cancelText: string = 'Cancel';
submitText: string = 'Save';
showButtons: boolean = true;

`} />

	<p class="mb-8">The Slideover component emits the following events:</p>

	<ul class="mb-8">
		<li><code>save</code>: Emitted when the submit button is clicked.</li>
		<li>
			<code>cancel</code>: Emitted when the cancel button is clicked or the close icon is
			clicked.
		</li>
	</ul>

	<p class="mb-8">
		The Slideover component is styled using classes and can be customized by passing class
		names to the <code>class</code> prop. It also uses Svelte transitions to animate the sliding
		effect.
	</p>
</DocsPage>
