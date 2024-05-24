<script lang="ts">
	import { Button, Slideover } from '$lib/components';
	export let data;

	let openSlideover = false;
</script>

<h1>Welcome to the application!</h1>
{#if data.session}
	<p>Welcome, {data.session.user.email}</p>
	<form action="?/auth/logout" method="POST">
		<Button type="submit" class="btn-primary">Logout</Button>
	</form>
{:else}
	<p>You are not logged in.</p>
{/if}

<Button on:click={() => (openSlideover = true)}>Open Slideover</Button>
<Slideover
	open={openSlideover}
	title="Your beautiful slideover"
	subtitle="Subtitle can be added as well">
	<p>Here is a basic content...</p>
</Slideover>
