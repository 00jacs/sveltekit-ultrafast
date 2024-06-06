/**
 * Overview: This file contains utility functions for working with strings.
 */

/**
 * Capitalizes the first letter of a string.
 * @param string - The string to capitalize.
 * @returns The capitalized string.
 */
export function capitalize(string: string): string {
	if (string.length === 0) return string;
	return string.charAt(0).toUpperCase() + string.slice(1);
}

/**
 * Converts a camelCase string to Title Case.
 * @param string - The camelCase string to convert.
 * @returns The Title Case string.
 */
export function camelCaseToTitleCase(string: string): string {
	return string.replace(/([A-Z])/g, ' $1').replace(/^./, function (str) {
		return str.toUpperCase();
	});
}

/**
 * Converts a kebab-case string to camelCase.
 * @param string - The kebab-case string to convert.
 * @returns The camelCase string.
 */
export function kebabCaseToCamelCase(string: string): string {
	return string.replace(/-./g, (match) => match.charAt(1).toUpperCase());
}
