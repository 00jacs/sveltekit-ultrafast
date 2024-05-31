<script lang="ts">
	import { DocsCode, DocsPage } from '$lib/components/page/docs';
</script>

<DocsPage
	title="Get started"
	subtitle="This page will give you everything you need to get started with
        developing your app with this boilerplate.">
	<p class="mb-8">
		Firstly, all the code is fully open-source and freely available on GitHub

		<a
			href="https://github.com/jacobxcoder/sveltekit-ultrafast/"
			class="link link-primary"
			target="_blank">
			here.
		</a>

		In case you find any issues or have any suggestions, feel free to open an issue there.
	</p>

	<div class="mb-12">
		<h2 class="mb-4 text-xl font-bold text-base-content">Step 1: clone the repository</h2>

		<p class="mb-4">
			In order to start, you need to clone the repository to have it locally.
		</p>

		<DocsCode
			language="bash"
			code="git clone https://github.com/jacobxcoder/sveltekit-ultrafast.git" />
	</div>

	<div class="mb-12">
		<h2 class="mb-4 text-xl font-bold text-base-content">
			Step 2: install all the packages
		</h2>

		<p class="mb-4">
			In order to be able to run the project locally, you need to install all the
			packages.
		</p>

		<DocsCode language="bash" code="npm install" />
	</div>

	<div class="mb-12">
		<h2 class="mb-4 text-xl font-bold text-base-content">
			Step 3: run the project locally!
		</h2>

		<p class="mb-4">
			Now, after the two steps above, you should be able to run the demo project locally.
		</p>

		<DocsCode language="bash" code="npm run dev" />
	</div>

	<div class="mb-12">
		<h2 class="mb-4 text-xl font-bold text-base-content">
			Step 4: Define what you want to build
		</h2>

		<p class="mb-4">
			The next steps will be highly project-specific. These are the features that you may
			want to look into:
		</p>

		<ul>
			<li>- Authentication</li>
			<li>- Database</li>
			<li>- Payments</li>
			<li>- Analytics</li>
			<li>- Blog</li>
		</ul>

		<p class="mt-4">
			You can find example pages for each of these features in the `/routes` directory.
		</p>
	</div>
</DocsPage>
