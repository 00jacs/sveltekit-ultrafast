/**
 * Tracks an event using Google Analytics.
 *
 * @param {string} action - The action associated with the event (like 'click').
 * @param {string} category - The category associated with the event (like 'button').
 * @param {string} label - The label associated with the event (like 'signup_button').
 * @param {string | number} value - The value associated with the event (like 1).
 */
export function fireTrackEvent(
	action: string,
	category: string,
	label: string,
	value: string | number
) {
	if (typeof window.gtag !== 'undefined') {
		window.gtag('event', action, {
			event_category: category,
			event_label: label,
			value: value
		});
	}
}
