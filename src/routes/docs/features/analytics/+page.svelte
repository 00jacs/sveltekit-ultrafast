<script lang="ts">
	import { DocsCode, DocsNote, DocsPage } from '$lib/components/page/docs';
</script>

<DocsPage
	title="Analytics"
	subtitle="What you don't track, you can't improve -
        analytics is key, even in rapid prototyping.">
	<p class="mb-8">
		The only analytics tool that is currently integrated into this boilerplate is Google
		Analytics.
	</p>

	<DocsNote class="mb-12">
		If you want to use another analytics tool, you can easily integrate it by following
		the documentation of the tool you want to use. If you want to use Google Analytics,
		you can follow the steps below.

		<br /><br />
		<a href="https://plausible.io/" class="link link-primary font-semibold">
			Plausible Analytics
		</a> is also a great alternative to Google Analytics. It is privacy-friendly and open-source.
		We plan to integrate that in the upcoming future.
	</DocsNote>

	<div class="mb-12">
		<h2 class="mb-4 text-xl font-bold text-base-content">
			Step 1: create a Google Analytics account
		</h2>

		<p class="mb-4">
			In order to start, you need to create a Google Analytics account. The entire process
			is pretty straight-forward and well documented.
		</p>
	</div>

	<div class="mb-12">
		<h2 class="mb-4 text-xl font-bold text-base-content">Step 2: get the API keys</h2>

		<p class="mb-4">
			After you have created a project, you need to get the API keys and fill in the
			`.env` file in the root of the project.
		</p>

		<DocsCode
			class="mb-8"
			language="bash"
			code={`
PUBLIC_GOOGLE_ANALYTICS_MEASUREMENT_ID=G-1EJZQZQZQZ
        `} />
	</div>

	<p>
		If you want to track custom events apart from the page views, see the
		`/routes/analytics` route which is an example of emitting a custom Google Analytics
		event.
	</p>
</DocsPage>
