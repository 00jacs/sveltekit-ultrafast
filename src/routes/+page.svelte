<script lang="ts">
	let counter = 0;
</script>

<div class="max-w-xl py-6 px-6 my-12 mx-auto border rounded-xl">
	<p class="mb-4">
		<span class="font-bold">Counter: </span>
		{counter}
	</p>
	<button class="btn btn-outline" on:click={() => (counter += 1)}>Increment</button>
</div>
