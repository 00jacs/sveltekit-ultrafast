<script lang="ts">
	export let id: string = '';
	export let name: string = '';
	export let type: 'text' | 'email' | 'password' = 'text';
	export let autocomplete: string = '';
	export let placeholder = '';
	export let label: string = '';
	export let value: string = '';
	export let required: boolean = false;

	export let containerClass: string = '';
	export let labelClass: string = '';
	export let inputClass: string = '';
</script>

<div class={containerClass}>
	{#if label}
		<label for={id} class="mb-2 block text-sm font-medium leading-6 {labelClass}">
			{label}
		</label>
	{/if}

	<!--
        Need this conditional because Svelte doesn't support
        two-way binding if {type} is dynamic
    -->
	{#if type === 'text'}
		<input
			type="text"
			{id}
			{name}
			{autocomplete}
			{placeholder}
			{required}
			class="input input-bordered w-full {inputClass}"
			bind:value />
	{:else if type === 'email'}
		<input
			type="email"
			{id}
			{name}
			{autocomplete}
			{placeholder}
			{required}
			class="input input-bordered w-full {inputClass}"
			bind:value />
	{:else if type === 'password'}
		<input
			type="password"
			{id}
			{name}
			{autocomplete}
			{placeholder}
			{required}
			class="input input-bordered w-full {inputClass}"
			bind:value />
	{/if}
</div>
