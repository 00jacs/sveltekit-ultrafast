<script lang="ts">
	export let id: string = '';
	export let name: string = '';
	export let type: 'text' | 'email' | 'password' = 'text';
	export let autocomplete: string = '';
	export let placeholder = '';
	export let label: string = '';
	export let value: string | undefined = '';
	export let required: boolean = false;
	export let error: string | boolean = '';

	export let containerClass: string = '';
	export let labelClass: string = '';
	export let inputClass: string = '';
</script>

<div class={containerClass}>
	{#if label}
		<label
			for={id}
			class="mb-2 flex justify-between text-sm font-medium leading-6 {error
				? 'text-error'
				: ''} {labelClass}">
			{label}

			{#if error && typeof error === 'string'}
				<span class="text-right font-bold text-error">{error}</span>
			{/if}
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
			class="input input-bordered w-full {error
				? 'input-error placeholder:text-error placeholder:text-opacity-80'
				: ''} {inputClass}"
			bind:value />
	{:else if type === 'email'}
		<input
			type="email"
			{id}
			{name}
			{autocomplete}
			{placeholder}
			{required}
			class="input input-bordered w-full {error
				? 'input-error placeholder:text-error placeholder:text-opacity-80'
				: ''} {inputClass}"
			bind:value />
	{:else if type === 'password'}
		<input
			type="password"
			{id}
			{name}
			{autocomplete}
			{placeholder}
			{required}
			class="input input-bordered w-full {error
				? 'input-error placeholder:text-error placeholder:text-opacity-80'
				: ''} {inputClass}"
			bind:value />
	{/if}
</div>
