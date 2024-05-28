import { THEME_KEY, Theme } from '$lib/stores/theme';

export async function POST({ url, cookies }) {
	const theme = url.searchParams.get('theme') as string;

	if (theme !== Theme.LIGHT && theme !== Theme.DARK) {
		return new Response('Invalid theme', {
			status: 400
		});
	}

	cookies.set(THEME_KEY, theme, { path: '/' });

	return new Response('Cookie set', {
		status: 200
	});
}
