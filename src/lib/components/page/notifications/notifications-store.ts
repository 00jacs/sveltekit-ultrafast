import { writable } from 'svelte/store';
import { generateUUID } from '$lib/utils/uuid';

type NotificationType = 'info' | 'success' | 'warning' | 'error';

export interface Notification {
	id: string;
	type: NotificationType;
	dismissible: boolean;
	timeout: number;
	title: string;
	description?: string;
}

export const notifications = writable<Notification[]>([]);

export const addNotification = (notification: Partial<Notification>) => {
	const id = notification?.id || generateUUID();

	const notificationDefaults: Notification = {
		id,
		type: 'info',
		dismissible: true,
		timeout: 3000,
		title: '',
		description: ''
	};

	const newNotification: Notification = {
		...notificationDefaults,
		...notification
	};

	notifications.update((notifications) => {
		return [newNotification, ...notifications];
	});

	if (newNotification.timeout) {
		setTimeout(() => hideNotification(id), newNotification.timeout);
	}
};

export const hideNotification = (id: string) => {
	notifications.update((all) => all.filter((t) => t.id != id));
};

export const notify = (type: NotificationType, title: string, description?: string) => {
	addNotification({
		type,
		title,
		description: description || ''
	});
};
