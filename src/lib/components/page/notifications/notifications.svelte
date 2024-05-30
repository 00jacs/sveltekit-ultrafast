<script lang="ts">
	import { fade } from 'svelte/transition';
	import { notifications } from './notifications-store';
	import {
		Icon,
		CheckCircle,
		InformationCircle,
		ExclamationTriangle
	} from 'svelte-hero-icons';

	const notificationTypes = {
		info: {
			icon: InformationCircle,
			color: 'text-base-200'
		},
		success: {
			icon: CheckCircle,
			color: 'text-green-400'
		},
		warning: {
			icon: ExclamationTriangle,
			color: 'text-yellow-500'
		},
		error: {
			icon: ExclamationTriangle,
			color: 'text-red-500'
		}
	} as const;
</script>

<div
	id="notifications-container"
	class="pointer-events-none fixed inset-0 z-50 flex items-end px-4 py-6 sm:items-start sm:p-6">
	<div class="flex w-full flex-col items-center space-y-4 sm:items-end">
		{#each $notifications as notification (notification.id)}
			<div
				class="pointer-events-auto w-full max-w-sm overflow-hidden rounded-lg
                    bg-base-100 shadow-lg ring-1 ring-base-content ring-opacity-5"
				transition:fade>
				<div class="p-4">
					<div class="flex items-start">
						<div class="flex-shrink-0">
							<Icon
								src={notificationTypes[notification.type].icon}
								class="h-6 w-6 stroke-current {notificationTypes[notification.type]
									.color}" />
						</div>

						<div class="ml-3 flex-1 pt-0.5">
							<p class="text-sm font-medium">{notification.title}</p>
							{#if notification.description}
								<p class="text-base-content-secondary mt-1 text-sm">
									{notification.description}
								</p>
							{/if}
						</div>
					</div>
				</div>
			</div>
		{/each}
	</div>
</div>
