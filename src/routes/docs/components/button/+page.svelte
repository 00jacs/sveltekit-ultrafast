<script lang="ts">
	import { Button } from '$lib/components';
	import { DocsPage, DocsCode, DocsNote, DocsPreview } from '$lib/components/page/docs';
</script>

<DocsPage title="Button">
	<p class="mb-6">
		In order to use button (or any other of the 'common' components), you can import it
		from '$lib/components'.
	</p>

	<DocsCode
		class="mb-8"
		language="typescript"
		code={`import { Button } from '$lib/components';`} />

	<p class="mb-4">And then use in in your Svelte template:</p>

	<DocsCode
		class="mb-8"
		language="html"
		code={`
<Button class="btn-primary">Click me</Button>
<Button class="btn-outline border-base-200">Outline button</Button>
<Button class="btn-outline border-base-200" loading={true}>Loading button</Button>

`} />

	<DocsPreview class="mb-8">
		<div class="flex flex-wrap gap-2">
			<Button class="btn-primary">Click me</Button>
			<Button class="btn-outline border-base-200">Outline button</Button>
			<Button class="btn-outline border-base-200" loading={true}>Loading button</Button>
		</div>
	</DocsPreview>

	<p class="mb-8">
		The button component is a simple Svelte component that accepts 4 props:
	</p>

	<DocsCode
		class="mb-8"
		language="typescript"
		code={`
id: string | undefined = undefined;
type: 'button' | 'submit' | 'reset' = 'button';
loading = false;
class: string;

`} />

	<p class="mb-8">
		The button component is based on
		<a
			href="https://daisyui.com/components/button/"
			class="link link-primary"
			target="_blank">
			DaisyUI button
		</a>
		so in case you need more customization, you can check out their documentation.
	</p>
</DocsPage>
