<script lang="ts">
	export let data;
</script>

<h1>Welcome to the application!</h1>
{#if data.session}
	<p>Welcome, {data.session.user.email}</p>
	<form action="?/auth/logout" method="POST">
		<button type="submit" class="btn btn-primary"> Logout </button>
	</form>
{:else}
	<p>You are not logged in.</p>
{/if}
