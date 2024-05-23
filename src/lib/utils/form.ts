/**
 * Converts a FormData object into a typed object.
 *
 * @template T - The type of the resulting object.
 * @param {FormData} formData - The FormData object to convert.
 * @returns {T} - The converted object.
 */
export function formDataToObject<T>(formData: FormData): T {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	const object: Record<string, any> = {}; // use any for mixed type handling

	formData.forEach((value, key) => {
		if (Object.prototype.hasOwnProperty.call(object, key)) {
			if (!Array.isArray(object[key])) {
				object[key] = [object[key]];
			}
			object[key].push(value);
		} else {
			object[key] = value;
		}
	});

	return object as T;
}
