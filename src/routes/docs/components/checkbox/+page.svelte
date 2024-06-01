<script lang="ts">
	import { Checkbox } from '$lib/components';
	import { DocsPage, DocsCode, DocsNote, DocsPreview } from '$lib/components/page/docs';
</script>

<DocsPage title="Checkbox">
	<p class="mb-6">To use the Checkbox component, import it from '$lib/components'.</p>

	<DocsCode
		class="mb-8"
		language="typescript"
		code={`import { Checkbox } from '$lib/components';`} />

	<p class="mb-4">Then, use it in your Svelte template:</p>

	<DocsCode
		class="mb-8"
		language="html"
		code={`
<Checkbox id="checkbox1" name="example" checked={true} label="Check me" />
<Checkbox id="checkbox2" name="example2" label="Another option" />

`} />

	<DocsPreview class="mb-8">
		<div class="flex flex-col gap-2">
			<Checkbox id="checkbox1" name="example" checked={true} label="Check me" />
			<Checkbox id="checkbox2" name="example2" label="Another option" />
		</div>
	</DocsPreview>

	<p class="mb-8">
		The Checkbox component is a simple Svelte component that accepts several props:
	</p>

	<DocsCode
		class="mb-8"
		language="typescript"
		code={`
id: string | undefined = undefined;
name: string = '';
checked: boolean = false;
label: string = '';
containerClass: string = '';
labelClass: string = '';
inputClass: string = '';

`} />

	<p class="mb-8">
		The Checkbox component is based on
		<a
			href="https://daisyui.com/components/checkbox/"
			class="link link-primary"
			target="_blank">
			DaisyUI checkbox
		</a>
		so for more customization options, you can refer to their documentation.
	</p>
</DocsPage>
