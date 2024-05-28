import type { LayoutServerLoad } from './$types';
import { THEME_KEY, DEFAULT_THEME } from '$lib/stores/theme';

/*
 * We need to have the session available in the layout on the client side
 * to show the user's name and avatar, and to show the login button when
 * the user is not logged in so DO NOT REMOVE THIS unless you plan
 * not to use authentication.
 */
export const load: LayoutServerLoad = async ({ cookies, locals: { session } }) => {
	return {
		session,
		theme: cookies.get(THEME_KEY) || DEFAULT_THEME
	};
};
