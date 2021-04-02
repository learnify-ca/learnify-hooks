import { useRef, useEffect } from "react";

/**
 * Custom hook of setInterval
 * @function useInterval
 * @since v0.1.0
 * @param {T} callback function callback
 * @param {number} delay period of interval in millseconds
 */
const useInterval = <T extends Function>(callback: T, delay: number): void => {
	const savedCallback = useRef(callback);

	// Remember the latest callback.
	useEffect((): void => {
		savedCallback.current = callback;
	}, [callback]);

	// Set up the interval.
	useEffect(() => {
		const tick = (): void => savedCallback.current();
		const id = setInterval(tick, delay);

		return (): void => clearInterval(id);
	}, [delay]);
};

export default useInterval;