<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import { Icon, XMark } from 'svelte-hero-icons';

	export let open: boolean;
	export let id = '';
	export let css = '';

	// you can also disable this by setting it to false
	// and display the icon in the popover container yourself
	export let withCloseIcon = true;

	interface ModalElement extends HTMLElement {
		showModal: () => void;
		close: () => void;
	}

	export let element: ModalElement | null = null;

	const dispatch = createEventDispatcher();

	function handleClose() {
		dispatch('close');
		open = false;
	}

	$: if (open) {
		element?.showModal();
	} else {
		element?.close();
	}
</script>

<dialog {id} class={`modal ${css}`} bind:this={element} on:close={handleClose}>
	<div class="border-1 modal-box relative border-solid border-base-300">
		{#if withCloseIcon}
			<button class="absolute right-4 top-4" on:click={handleClose}>
				<Icon src={XMark} class="h-5 w-5" />
			</button>
		{/if}
		<slot>Default slot of the dialog box.</slot>
	</div>
</dialog>
