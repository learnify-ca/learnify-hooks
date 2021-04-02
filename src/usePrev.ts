import { useRef, useEffect } from "react";

/**
 * Custom hook that registers the previous value of variable
 * @function usePrev
 * @since 0.1.0
 * @param {T} value previous value
 * @returns {T}
 */
export const usePrev = <T,>(value: T): T | undefined => {
	const ref = useRef<T>();

	useEffect((): void => {
		ref.current = value;
	}, [value]);

	return ref.current;
};

export default usePrev;