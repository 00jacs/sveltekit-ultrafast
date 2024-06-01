<script lang="ts">
	import { InputNumber } from '$lib/components';
	import { DocsPage, DocsCode, DocsNote, DocsPreview } from '$lib/components/page/docs';
</script>

<DocsPage title="InputNumber">
	<p class="mb-6">To use the Number Input component, import it from '$lib/components'.</p>

	<DocsCode
		class="mb-8"
		language="typescript"
		code={`import { InputNumber } from '$lib/components';`} />

	<p class="mb-4">Then, use it in your Svelte template:</p>

	<DocsCode
		class="mb-8"
		language="html"
		code={`
<InputNumber
    id="number1"
    name="exampleNumber"
    placeholder="Enter a number"
    value={10}
    label="Number Input"
    labelHint="Hint text"
    min={0}
    max={100}
/>
<InputNumber
    id="number2"
    name="exampleNumber2"
    placeholder="Another number"
    value={20}
    label="Another Input"
    labelHint="Another hint"
    disabled={true}
/>

`} />

	<DocsPreview class="mb-8">
		<div class="flex flex-col gap-4">
			<InputNumber
				id="number1"
				name="exampleNumber"
				placeholder="Enter a number"
				value={10}
				label="Number Input"
				labelHint="Hint text"
				min={0}
				max={100} />
			<InputNumber
				id="number2"
				name="exampleNumber2"
				placeholder="Another number"
				value={20}
				label="Another Input"
				labelHint="Another hint"
				disabled={true} />
		</div>
	</DocsPreview>

	<p class="mb-8">
		The Number Input component is a simple Svelte component that accepts several props:
	</p>

	<DocsCode
		class="mb-8"
		language="typescript"
		code={`
id: string | undefined = undefined;
name: string | undefined = undefined;
placeholder: string | undefined = undefined;
value: number = 0;
disabled: boolean = false;
required: boolean = true;
min: number = 0;
max: number = 10000;

label: string | undefined = undefined;
labelHint: string | undefined = undefined;

containerClass: string = '';
labelContainerClass: string = '';
labelClass: string = '';
labelHintClass: string = '';
inputClass: string = '';

`} />

	<p class="mb-8">
		The Number Input component is based on
		<a
			href="https://daisyui.com/components/input/"
			class="link link-primary"
			target="_blank">
			DaisyUI input
		</a>
		so for more customization options, you can refer to their documentation.
	</p>
</DocsPage>
