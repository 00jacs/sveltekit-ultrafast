<script lang="ts">
	import { InputText } from '$lib/components';
	import { DocsPage, DocsCode, DocsNote, DocsPreview } from '$lib/components/page/docs';
</script>

<DocsPage title="InputText">
	<p class="mb-6">To use the InputText component, import it from '$lib/components'.</p>

	<DocsCode
		class="mb-8"
		language="typescript"
		code={`import { InputText } from '$lib/components';`} />

	<p class="mb-4">Then, use it in your Svelte template:</p>

	<DocsCode
		class="mb-8"
		language="html"
		code={`
<InputText
    id="input1"
    name="exampleInput"
    type="text"
    placeholder="Enter text"
    label="Text Input"
    value=""
    required={true}
/>
<InputText
    id="input2"
    name="exampleEmail"
    type="email"
    placeholder="Enter your email"
    label="Email Input"
    value=""
    error="Invalid email"
/>
<InputText
    id="input3"
    name="examplePassword"
    type="password"
    placeholder="Enter your password"
    label="Password Input"
    value=""
    required={true}
/>

`} />

	<DocsPreview class="mb-8">
		<div class="flex flex-col gap-4">
			<InputText
				id="input1"
				name="exampleInput"
				type="text"
				placeholder="Enter text"
				label="Text Input"
				value=""
				required={true} />
			<InputText
				id="input2"
				name="exampleEmail"
				type="email"
				placeholder="Enter your email"
				label="Email Input"
				value=""
				error="Invalid email" />
			<InputText
				id="input3"
				name="examplePassword"
				type="password"
				placeholder="Enter your password"
				label="Password Input"
				value=""
				required={true} />
		</div>
	</DocsPreview>

	<p class="mb-8">
		The InputText component is a versatile Svelte component that accepts several props:
	</p>

	<DocsCode
		class="mb-8"
		language="typescript"
		code={`
id: string | undefined = undefined;
name: string | undefined = undefined;
type: 'text' | 'email' | 'password' = 'text';
autocomplete: string = '';
placeholder = '';
label: string = '';
value: string | undefined = '';
required: boolean = false;
error: string | boolean = '';

containerClass: string = '';
labelClass: string = '';
inputClass: string = '';

`} />

	<p class="mb-8">
		The InputText component is based on
		<a
			href="https://daisyui.com/components/input/"
			class="link link-primary"
			target="_blank">
			DaisyUI input
		</a>
		so for more customization options, you can refer to their documentation.
	</p>
</DocsPage>
