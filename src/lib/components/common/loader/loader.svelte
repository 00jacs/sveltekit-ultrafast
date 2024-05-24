<script lang="ts">
	let className: string = '';
	export { className as class };

	export let spinnerClass: string = '';
</script>

<div
	class="absolute left-0 top-0 flex h-full w-full items-center justify-center {className}">
	<div class="loading loading-spinner {spinnerClass}"></div>
</div>
