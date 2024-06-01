<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import type { HTMLButtonAttributes } from 'svelte/elements';

	interface $$Props extends HTMLButtonAttributes {
		id?: string;
		type?: 'button' | 'submit' | 'reset';
		loading?: boolean;
	}

	const dispatch = createEventDispatcher();

	export let id: string | undefined = undefined;
	export let type: 'button' | 'submit' | 'reset' = 'button';
	export let loading = false;

	let className: $$Props['class'] = '';
	export { className as class };
</script>

<button
	{id}
	{type}
	class="btn {className}"
	{...$$restProps}
	on:click={(e) => dispatch('click', e)}>
	{#if loading}
		<span class="loading loading-spinner m-0 h-3 w-3 p-0"></span>
	{/if}

	<slot />
</button>
