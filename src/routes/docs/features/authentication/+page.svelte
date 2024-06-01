<script lang="ts">
	import { DocsCode, DocsPage } from '$lib/components/page/docs';
</script>

<DocsPage
	title="Authentication"
	subtitle="This page will give you everything you need to get started with
        the authentication flow in this boilerplate.">
	<p class="mb-8">
		The authentication flow in this boilerplate is powered by
		<a href="https://supabase.com/" target="_blank" class="link link-primary">
			Supabase.
		</a>
		Supabase is an open-source Firebase alternative. It provides a set of tools to build your
		app faster and with less effort.
	</p>

	<div class="mb-12">
		<h2 class="mb-4 text-xl font-bold text-base-content">
			Step 1: create a Supabase account
		</h2>

		<p class="mb-4">
			In order to start, you need to create a Supabase account. You can do that
			<a href="https://app.supabase.io/" target="_blank" class="link link-primary">
				here.
			</a>
		</p>
	</div>

	<div class="mb-12">
		<h2 class="mb-4 text-xl font-bold text-base-content">Step 2: create a new project</h2>

		<p class="mb-4">
			After you have created an account, you need to create a new project.
		</p>
	</div>

	<div class="mb-12">
		<h2 class="mb-4 text-xl font-bold text-base-content">Step 3: get the API keys</h2>

		<p class="mb-4">
			After you have created a project, you need to get the API keys and fill in the
			`.env` file in the root of the project.
		</p>

		<DocsCode
			language="bash"
			code={`
PUBLIC_SUPABASE_URL="your supabase project url, ex. https://<project>.supabase.co"
PUBLIC_SUPABASE_ANON_KEY="your supabase API key for your project"
        `} />
	</div>

	<p>
		After you have done all the steps above, you should be able to run the project locally
		and see the authentication flow in action.
	</p>
</DocsPage>
