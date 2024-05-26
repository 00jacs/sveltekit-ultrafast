<script lang="ts">
	import Button from '$lib/components/common/button/button.svelte';
</script>

<form action="?/checkout" method="POST">
	<Button type="submit" class="btn-primary">Pay $10</Button>
</form>
