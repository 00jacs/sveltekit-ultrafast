<script lang="ts">
	import { enhance } from '$app/forms';
	import { InputText, Button, notify } from '$lib/components';

	export let data;
	export let form;

	$: if (form?.success) {
		notify('success', 'Country added successfully.');
	}
</script>

<div class="mx-auto my-8 max-w-5xl px-8 py-8">
	<h1 class="mb-2 text-3xl font-bold">Example of using a database</h1>

	<p class="text-base-content-secondary mb-2">
		Supabase has built-in methods to query your PostgreSQL database, making it really easy
		to fetch & modify data.
	</p>

	<p class="text-base-content-secondary mb-2">
		Here's a
		<a
			href="https://supabase.com/docs/guides/getting-started/quickstarts/sveltekit"
			target="_blank"
			class="link">
			full guide on getting started
		</a>
		with your SQL Supabase database.
	</p>

	<div class="divider mb-4"></div>

	<h2 class="mb-4 text-xl font-semibold">Add country</h2>

	<form action="?/createCountry" method="POST" class="mb-2" use:enhance>
		{#if form?.message}
			<p class="mb-4 text-error">
				<span class="font-bold">Error: </span>
				{form.message}
			</p>
		{/if}

		<InputText
			id="name"
			name="name"
			type="text"
			placeholder="Country name"
			required
			label="Country name"
			containerClass="mb-4"
			value={form?.formData?.name}
			error={form?.errors?.fieldErrors?.name?.[0]} />

		<InputText
			id="iso2"
			name="iso2"
			type="text"
			placeholder="CK"
			required
			label="ISO-2 Country Code"
			containerClass="mb-4"
			value={form?.formData?.iso2}
			error={form?.errors?.fieldErrors?.iso2?.[0]} />

		<InputText
			id="iso3"
			name="iso3"
			type="text"
			placeholder="CK"
			required
			label="ISO-3 Country Code"
			containerClass="mb-4"
			value={form?.formData?.iso3}
			error={form?.errors?.fieldErrors?.iso3?.[0]} />

		<Button type="submit" class="btn-primary">Add country</Button>
	</form>

	<div class="divider mb-4"></div>

	<h2 class="mb-4 text-xl font-semibold">List of fetched countries:</h2>
	<ul class="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3">
		{#each data.countries as country}
			<li
				class="flex flex-col justify-start rounded-md border
                border-base-200 px-2 py-2 shadow-sm">
				{#if country.continent}
					<span class="text-xs font-bold uppercase tracking-wider text-primary">
						{country.continent}
					</span>
				{/if}

				{country.name}
			</li>
		{/each}
	</ul>
</div>
