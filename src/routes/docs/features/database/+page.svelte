<script lang="ts">
	import { DocsCode, DocsPage } from '$lib/components/page/docs';
</script>

<DocsPage
	title="Database"
	subtitle="Set up your PostgreSQL database with Supabase in minutes.">
	<p class="mb-8">
		This boilerplate has a PostgreSQL database set up with
		<a href="https://supabase.com/" target="_blank" class="link link-primary">
			Supabase.
		</a>

		Supabase is an open-source Firebase alternative that provides a real-time database,
		authentication, and storage.

		<br /><br />
		If you prefer a different database provider, you can easily swap out Supabase with another
		provider like Firebase, Fauna, or Hasura.
	</p>

	<div class="mb-12">
		<h2 class="mb-4 text-xl font-bold text-base-content">
			Step 1: create your Supabase account (if you don't already have it)
		</h2>

		<p class="mb-4">
			In order to start, you need to create a Supabase account. You can do that
			<a href="https://supabase.com/" target="_blank" class="link link-primary">
				here.
			</a>
		</p>
	</div>

	<div class="mb-12">
		<h2 class="mb-4 text-xl font-bold text-base-content">Step 2: create your table</h2>

		<p class="mb-4">
			After you have created an account, you need to create a table in the Supabase
			dashboard. You can create a table using SQL Editor or by clicking the "New Table"
			button in the Dashboard/Database/Tables.
		</p>

		<DocsCode
			language="sql"
			code={`
create table public.movies (
  id bigint generated always as identity primary key,
  name text not null,
  data jsonb null
);

`} />
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

	<div class="mb-12">
		<h2 class="mb-4 text-xl font-bold text-base-content">
			Step 4: get familiar with Supabase documentation
		</h2>

		<p class="mb-4">
			Supabase has a great documentation about database usage
			<a
				href="https://supabase.com/docs/guides/database/overview"
				target="_blank"
				class="link link-primary">
				here.
			</a>

			<br /><br />
			And here's documentation for JavaScript specifically:
			<a
				href="https://supabase.com/docs/reference/javascript/select"
				class="link link-primary">
				https://supabase.com/docs/reference/javascript/select
			</a>
		</p>
	</div>

	<div class="mb-12">
		<h2 class="mb-4 text-xl font-bold text-base-content">
			Step 5 (optional): automatically generate TypeScript types
		</h2>

		<p class="mb-4">
			In order to get TypeScript types for your database, you can follow the documentation
			available in the `/routes/database-example/docs.md` route.
		</p>
	</div>

	<p>
		Take a look at the `/routes/database-example` route to see how to interact with the
		database.
	</p>
</DocsPage>
