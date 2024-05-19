<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	export let id: string = '';
	export let name: string = '';
	export let checked: boolean = false;
	export let label: string = '';

	export let containerClass: string = '';
	export let labelClass: string = '';
	export let inputClass: string = '';

	const dispatch = createEventDispatcher();

	function handleChange(e: Event) {
		checked = (e.target as HTMLInputElement).checked;
		dispatch('change', checked);
	}
</script>

<div class="form-control {containerClass}">
	<label for={id || undefined} class="label cursor-pointer justify-start gap-2">
		<input
			type="checkbox"
			{id}
			{name}
			class="checkbox-primary checkbox checkbox-xs {inputClass}"
			bind:checked
			on:change={handleChange} />

		<span class="label-text {labelClass}">
			<slot>{label}</slot>
		</span>
	</label>
</div>
