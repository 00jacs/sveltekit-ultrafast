<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	export let id: string | undefined = undefined;
	export let name: string | undefined = undefined;
	export let placeholder: string | undefined = undefined;
	export let value: number = 0;
	export let disabled: boolean = false;
	export let required: boolean = true;
	export let min: number = 0;
	export let max: number = 10000;

	export let label: string | undefined = undefined;
	export let labelHint: string | undefined = undefined;

	export let containerClass: string = '';
	export let labelContainerClass: string = '';
	export let labelClass: string = '';
	export let labelHintClass: string = '';
	export let inputClass: string = '';

	const dispatch = createEventDispatcher();

	function handleChange(e: Event) {
		const target = e.target as HTMLInputElement;

		dispatch('input', target.value);

		const parsedValue = parseInt(target.value);
		if (parsedValue && parsedValue > 0) {
			value = parsedValue;
		} else {
			value = 0;
		}
	}
</script>

<label class="form-control w-full {containerClass}">
	{#if label || labelHint}
		<div class="label {labelContainerClass}">
			{#if label}
				<span class="label-text font-bold {labelClass}">{label}</span>
			{/if}
			{#if labelHint}
				<span class="label-text-alt {labelHintClass}">{labelHint}</span>
			{/if}
		</div>
	{/if}

	<input
		type="number"
		{id}
		{name}
		{placeholder}
		{required}
		{disabled}
		{value}
		{min}
		{max}
		class="input input-bordered w-full {inputClass}"
		on:input={handleChange} />
</label>
