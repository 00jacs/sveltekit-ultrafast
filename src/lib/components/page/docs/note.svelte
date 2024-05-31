<script lang="ts">
	let className: string = '';
	export { className as class };
</script>

<p
	class="rounded border border-primary border-opacity-60 bg-primary
        bg-opacity-10 p-4 shadow-primary {className}">
	<slot />
</p>
