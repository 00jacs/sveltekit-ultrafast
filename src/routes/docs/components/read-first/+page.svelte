<script lang="ts">
	import { DocsPage, DocsCode, DocsNote, DocsPreview } from '$lib/components/page/docs';
</script>

<DocsPage
	title="Read this first"
	subtitle="Here are some important things to know before you start using the components.">
	<h2 class="mb-4 text-xl font-semibold">1) Daisy UI</h2>

	<p class="mb-6">
		Most of the components in this library are based on the <a
			href="https://daisyui.com"
			target="_blank"
			class="text-blue-600">Daisy UI</a> design system. This means that you can use the same
		classes and utilities that you would use with Daisy UI components.
	</p>

	<p class="mb-6">
		This is one of the most popular UI kits and it makes it very easy to start developing
		UI (alongside with Tailwind CSS, of course).
	</p>

	<div class="divider"></div>

	<h2 class="mb-4 text-xl font-semibold">2) Components structure</h2>

	<p class="mb-6">
		The components are organized in a way that makes it easy to find and use them. Each
		component is located in its own file in the <code>src/lib/components</code> directory.
	</p>

	<p class="mb-4">Why this way? Why not just use the DaisyUI classes?</p>

	<ul class="mb-6 ml-1 flex flex-col gap-4">
		<li>
			- <strong>Reusability:</strong> you can use the components in multiple places in your
			project without having to remember the classes.
		</li>
		<li>
			- <strong>Consistency:</strong> the components are consistent across the project.
		</li>
		<li>
			- <strong>Customization:</strong> you can easily customize the components by changing
			the code in the component file.
		</li>
	</ul>

	<DocsCode
		class="mb-8"
		language="typescript"
		code={`
import { Button, Checkbox, InputText, Loader, Popover } from '$lib/components';

`} />

	<div class="divider"></div>

	<h2 class="mb-4 text-xl font-semibold">3) Customization</h2>

	<p class="mb-6">
		The components are designed to be easily customizable. You can change the classes, add
		new props, or even change the structure of the component.
	</p>

	<p class="mb-6">
		If you want to customize a component, you can simply copy the component file to your
		project and make the changes there. This way, you can keep the original component as
		it is and use the customized version in your project.
	</p>

	<div class="divider"></div>

	<h2 class="mb-4 text-xl font-semibold">4) Themes</h2>

	<p class="mb-6">
		You can easily change the theme of the components by changing the colors in the
		<code>tailwind.config.js</code> file. This way, you can match the components with the design
		of your project.
	</p>

	<a
		href="https://daisyui.com/docs/themes/"
		target="_blank"
		class="link link-primary mb-6 block">
		See DaisyUI's guide to theme/typography customziation.
	</a>

	<p class="mb-6">
		The theme switch functionality has already been implemented (server cookies store the
		user's theme preference). You can toggle the theme by clicking the "Toggle theme"
		button in the top right corner of the page. Take a look at the
		`routes/+layout.svelte`:
	</p>

	<DocsCode
		class="mb-8"
		language="typescript"
		code={`
if (data.theme === Theme.LIGHT || data.theme === Theme.DARK) {
    theme.set(data.theme);

    if (browser) {
        document.documentElement.setAttribute('data-theme', data.theme);
    }
}

`} />

	<div class="divider"></div>

	<h2 class="mb-4 text-xl font-semibold">5) Theme recommendations</h2>

	<p>
		I would recommend you define the following colors for simplicity (unless you're an
		advanced designer and you know what you're doing):
	</p>

	<ul class="my-4 ml-1">
		<li>- primary &rarr; your main (and only) brand color</li>
		<li>- primary-content &rarr; text color on the "primary" fill</li>
		<li>- base-100 &rarr; default background color</li>
		<li>- base-200 &rarr; used for borders and lighter backgrounds</li>
		<li>- base-300 &rarr; used for borders and lighter backgrounds</li>
		<li>- base-content &rarr; text color on the "base-100" fill</li>
	</ul>

	<p>
		Usually, keeping it simple (only one "accent"/"primary" color, no "secondary" color)
		is the best approach. You can always add more colors later.
	</p>
</DocsPage>
