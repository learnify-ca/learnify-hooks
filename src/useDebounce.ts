import { useState } from "react";
import useTimeout from "./useTimeout";

/**
 * @function useDebounce
 * @param {T} value value to debounce
 * @param {number | undefined} delay time to debounce value by
 * @returns {T} debounced value
 */
const useDebounce = <T>(value: T, delay = 500): T => {
	// State and setters for debounced value
	const [debouncedValue, setDebouncedValue] = useState(value);

	useTimeout(() => {
		setDebouncedValue(value);
	}, delay);

	return debouncedValue;
}

export default useDebounce;