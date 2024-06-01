<script lang="ts">
	import { Loader } from '$lib/components';
	import { DocsPage, DocsCode, DocsNote, DocsPreview } from '$lib/components/page/docs';
</script>

<DocsPage title="Loader">
	<p class="mb-6">To use the Loader component, import it from '$lib/components'.</p>

	<DocsCode
		class="mb-8"
		language="typescript"
		code={`import { Loader } from '$lib/components';`} />

	<p class="mb-4">Then, use it in your Svelte template:</p>

	<DocsCode
		class="mb-8"
		language="html"
		code={`
<Loader />

`} />

	<DocsPreview class="mb-8">
		<div class="relative h-24 w-24 border">
			<Loader class="custom-class" spinnerClass="custom-spinner-class" />
		</div>
	</DocsPreview>

	<p class="mb-8">
		The Loader component is a simple Svelte component that accepts two props:
	</p>

	<DocsCode
		class="mb-8"
		language="typescript"
		code={`
class: string = ''; // class for the container
spinnerClass: string = ''; // class for the spinner itself

`} />

	<p class="mb-8">
		The Loader component is styled using classes and can be customized by passing class
		names to the <code>class</code> and <code>spinnerClass</code> props.
	</p>
</DocsPage>
