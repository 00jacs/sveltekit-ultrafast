<script lang="ts">
	let className: string = '';
	export { className as class };
</script>

<div class="flex flex-col gap-2 rounded border border-base-200 {className}">
	<div
		class="text-base-content-secondary flex items-center justify-between
            border-b border-base-200 px-3 py-2 text-sm">
		<p>preview</p>
		<slot name="header" />
	</div>

	<div class="px-4 pb-4 pt-2">
		<slot />
	</div>
</div>
