import { useRef, useEffect } from "react";

/**
 * Custom hook for setTimeout
 * @function useTimeout
 * @since v0.1.0
 * @param {Function} callback function callback
 * @param {number} delay period of timeout in millseconds
 */
export const useTimeout = <T extends Function>(callback: T, delay: number): void => {
	const savedCallback = useRef(callback);

	// Remember the latest callback.
	useEffect((): void => {
		savedCallback.current = callback;
	}, [callback]);

	// Set up the interval.
	useEffect((): () => void => {
		const tick = (): void => savedCallback.current();
		const id = setTimeout(tick, delay);

		return (): void => clearTimeout(id);
	}, [delay]);
};

export default useTimeout;