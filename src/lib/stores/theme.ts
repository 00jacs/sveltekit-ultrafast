import { get, writable } from 'svelte/store';
import { browser } from '$app/environment';
import axios from 'axios';
import logger from '$lib/utils/logger';

export enum Theme {
	LIGHT = 'light',
	DARK = 'dark'
}

export const DEFAULT_THEME: Theme = Theme.DARK;

export const THEME_KEY = 'sveltekit_theme_cookie';

async function cacheTheme(value: Theme) {
	try {
		await axios.post(`/theme?theme=${value}`);
	} catch (e) {
		logger.error('[theme] Could not cache the theme: ', e);
	}
}

export const theme = writable<Theme>();

export function toggleTheme() {
	const newValue: Theme = get(theme) === Theme.LIGHT ? Theme.DARK : Theme.LIGHT;

	theme.set(newValue);
	cacheTheme(newValue);

	if (browser) {
		document.documentElement.setAttribute('data-theme', newValue);
	}
}
