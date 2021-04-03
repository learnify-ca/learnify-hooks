import { useState } from "react";

/**
 * @function useLocalStorage
 * @param {string} key key of value in store
 * @param {T} initialValue initial value
 * @param {(error) => E} errorHandler function to handle the error
 * @returns {[T, (value: T) => void]}
 */
const useLocalStorage = <T, E = any>(
	key: string,
	initialValue: T,
	errorHandler?: (error: unknown) => E
): [T, (value: T) => void] => {
	const [storedValue, setStoredValue] = useState<T>((): T => {
		try {
			// Get from local storage by key
			const item = window.localStorage.getItem(key);
			// Parse stored json or if none return initialValue
			return item ? JSON.parse(item) : initialValue;
		} catch (error) {
			// If error also return initialValue
			console.log(error);
			return initialValue;
		}
	});

	// Return a wrapped version of useState's setter function that ...
	// ... persists the new value to localStorage.
	const setValue = (value: T): void => {
		try {
			// Allow value to be a function so we have same API as useState
			const valueToStore =
				value instanceof Function ? value(storedValue) : value;

			setStoredValue(valueToStore);

			window.localStorage.setItem(key, JSON.stringify(valueToStore));
		} catch (error: unknown) {
			console.log(error);
			errorHandler && errorHandler(error);
		}
	};

	return [storedValue, setValue];
}

export default useLocalStorage;