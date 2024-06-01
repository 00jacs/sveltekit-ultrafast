<script lang="ts">
	import { DocsCode, DocsNote, DocsPage } from '$lib/components/page/docs';
</script>

<DocsPage
	title="Analytics"
	subtitle="What you don't track, you can't improve -
        analytics is key, even in rapid prototyping.">
	<p class="mb-8">
		This boilerplate offers 2 analytics components: Google Analytics and Plausible
		Analytics.
	</p>

	<DocsNote class="mb-12">
		If you want to use another analytics tool, you can easily integrate it by following
		the documentation of the tool you want to use.
	</DocsNote>

	<div class="mb-12">
		<h2 class="mb-4 text-xl font-bold text-base-content">
			Step 1: create a Google Analytics/Plausible Analytics account
		</h2>

		<p class="mb-4">
			In order to start, you need to create an account. The entire process is pretty
			straight-forward and well documented.
		</p>
	</div>

	<div class="mb-12">
		<h2 class="mb-4 text-xl font-bold text-base-content">
			Step 2: get the measurement ID [Google]
		</h2>

		<p class="mb-4">
			For Google Analytics, you need to fill in the `.env` file in the root of the project
			with the measurement ID.
		</p>

		<DocsCode
			class="mb-8"
			language="bash"
			code={`
PUBLIC_GOOGLE_ANALYTICS_MEASUREMENT_ID=G-1EJZQZQZQZ
        `} />

		<DocsNote class="mb-8">
			Keep in mind that with Google Analytics, you need to have a privacy policy available
			and a cookie consent alert which is not yet implemented.
		</DocsNote>

		<p>
			If you want to track custom events apart from the page views, see the
			`/routes/analytics` route which is an example of emitting a custom Google Analytics
			event.
		</p>
	</div>

	<div class="mb-12">
		<h2 class="mb-4 text-xl font-bold text-base-content">
			Step 3: add the analytics component to +layout.svelte
		</h2>

		<p class="mb-4">
			Import the component of your choice and add it to the `+layout.svelte` file.
		</p>

		<DocsCode
			class="mb-8"
			language="typescript"
			code={`
import { GoogleAnalytics, PlausibleAnalytics }  from '$lib/components/page/analytics';

`} />

		<p class="mb-4">And add one of them to your main +layout.svelte:</p>

		<DocsCode
			class="mb-8"
			language="html"
			code={`
<GoogleAnalytics/>
<PlausibleAnalytics/>
        `} />

		<DocsNote class="mb-8">
			If you want to use PlausibleAnalytics, you need to have the `PUBLIC_DOMAIN_URL`
			properly set in the `.env` file.
		</DocsNote>
	</div>
</DocsPage>
