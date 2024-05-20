<script lang="ts">
	import { Button } from '$lib/components';
	export let data;
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
