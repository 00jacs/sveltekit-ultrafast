<script lang="ts">
	import { Button, Slideover, Loader } from '$lib/components';
	import PricingSection from '$lib/components/page/pricing/simple-one-time/pricing-section.svelte';
	export let data;

	let openSlideover = false;
</script>

<PricingSection />

<div class="mx-auto my-12 max-w-md p-4">
	<h1 class="mb-4 text-2xl font-bold">Welcome to the application!</h1>

	{#if data.session}
		<p>Welcome, {data.session.user.email}</p>
		<form action="?/auth/logout" method="POST">
			<Button type="submit" class="btn-primary">Logout</Button>
		</form>
	{:else}
		<p>You are not logged in...</p>
	{/if}

	<div class="divider"></div>

	<Button on:click={() => (openSlideover = true)} class="mb-6">Open Slideover</Button>

	<Slideover
		bind:open={openSlideover}
		title="Your beautiful slideover"
		subtitle="Subtitle can be added as well">
		<p>Here is a basic content...</p>
	</Slideover>

	<div class="relative h-64 w-64 rounded-lg border p-3">
		Some content would be here...
		<span class="text-xs">simulating the loading processs..</span>
		<Loader />
	</div>
</div>
