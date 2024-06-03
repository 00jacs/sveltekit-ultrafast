<script lang="ts">
	import { Button } from '$lib/components';
	import { fade, fly } from 'svelte/transition';
	import { createEventDispatcher } from 'svelte';
	import { Icon, InformationCircle, ExclamationCircle, Check } from 'svelte-hero-icons';

	export let type: 'danger' | 'warning' | 'info' | 'success' = 'info';
	export let title: string;
	export let message: string;
	export let submitText: string;
	export let cancelText: string = 'Cancel';

	const dispatch = createEventDispatcher();

	$: btnClass =
		type == 'danger'
			? 'btn-error'
			: type == 'warning'
				? 'btn-warning'
				: type == 'info'
					? 'btn-info'
					: type == 'success'
						? 'btn-success'
						: 'btn-primary';

	$: typeColorClass =
		type == 'danger'
			? 'bg-red-100'
			: type == 'warning'
				? 'bg-yellow-100'
				: type == 'info'
					? 'bg-blue-100'
					: type == 'success'
						? 'bg-green-100'
						: 'bg-gray-100';
</script>

<div class="relative" style="z-index: 60;">
	<div
		class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
		transition:fade={{ duration: 200 }}>
	</div>

	<div class="fixed inset-0 z-10 w-screen overflow-y-auto">
		<div
			class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
			<div
				class="relative transform overflow-hidden rounded-lg bg-base-100 px-4 pb-4 pt-5
                    text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6"
				transition:fly>
				<div class="sm:flex sm:items-start">
					<div
						class={`${typeColorClass} mx-auto flex h-12 w-12 flex-shrink-0 items-center
                            justify-center rounded-full sm:mx-0 sm:h-10 sm:w-10`}>
						{#if type == 'danger'}
							<Icon src={ExclamationCircle} class="h-7 w-7 text-red-600" />
						{:else if type == 'warning'}
							<Icon src={ExclamationCircle} class="h-7 w-7 text-yellow-600" />
						{:else if type == 'info'}
							<Icon src={InformationCircle} class="h-7 w-7 text-blue-600" />
						{:else if type == 'success'}
							<Icon src={Check} class="h-7 w-7 text-green-600" />
						{/if}
					</div>

					<div class="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
						<h3 class="text-base font-semibold leading-6">{title}</h3>

						{#if message}
							<p class="text-base-content-secondary mt-2 text-sm">
								{message}
							</p>
						{/if}
					</div>
				</div>
				<div class="mt-5 flex justify-center gap-2 sm:mt-4 sm:justify-end">
					<Button class="btn-outline border-base-200" on:click={() => dispatch('cancel')}>
						{cancelText}
					</Button>

					<Button class={`btn ${btnClass} sm:w-auto`} on:click={() => dispatch('submit')}>
						{submitText}
					</Button>
				</div>
			</div>
		</div>
	</div>
</div>
