/**
 * Overview: This file contains utility functions for working with objects.
 */

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

// Your TypeScript code follows

/**
 * Creates a deep copy of an object, including functions.
 * @param obj - The object to clone.
 * @returns A deep clone of the object.
 */
export function deepClone<T>(obj: T): T {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	const isObject = (value: any) =>
		value && typeof value === 'object' && !Array.isArray(value);

	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	const clone = (item: any): any => {
		if (item === null || typeof item !== 'object') {
			return item;
		}

		if (item instanceof Date) {
			return new Date(item);
		}

		if (Array.isArray(item)) {
			return item.map(clone);
		}

		if (typeof item === 'function') {
			return item.bind(null);
		}

		if (isObject(item)) {
			// eslint-disable-next-line @typescript-eslint/no-explicit-any
			const copy: { [key: string]: any } = {};
			Object.keys(item).forEach((key) => {
				copy[key] = clone(item[key]);
			});
			return copy;
		}

		throw new Error('Unsupported type detected during deep clone');
	};

	return clone(obj);
}

/**
 * Recursively merges properties of two objects.
 * @param target - The target object to merge properties into.
 * @param source - The source object to merge properties from.
 * @returns The merged object.
 */
export function deepMerge<T>(target: T, source: T): T {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	const isObject = (obj: any) => obj && typeof obj === 'object';

	if (!isObject(target) || !isObject(source)) {
		return target;
	}

	Object.keys(source).forEach((key) => {
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		const targetValue = (target as any)[key];
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		const sourceValue = (source as any)[key];

		if (Array.isArray(targetValue) && Array.isArray(sourceValue)) {
			// eslint-disable-next-line @typescript-eslint/no-explicit-any
			(target as any)[key] = targetValue.concat(sourceValue);
		} else if (isObject(targetValue) && isObject(sourceValue)) {
			// eslint-disable-next-line @typescript-eslint/no-explicit-any
			(target as any)[key] = deepMerge(Object.assign({}, targetValue), sourceValue);
		} else {
			// eslint-disable-next-line @typescript-eslint/no-explicit-any
			(target as any)[key] = sourceValue;
		}
	});

	return target;
}
