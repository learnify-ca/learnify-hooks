import { useEffect, useRef } from "react";

/**
 * Tracked whether the component is currently mounted
 * @function useIsMounted
 * @returns {boolean} true if the component is mounted
 */
const useIsMounted = (): boolean => {
	const isMounted = useRef(true);

	useEffect((): () => void => {
		return (): void => {
			isMounted.current = false
		};
	}, []);

	return isMounted.current;
};

export default useIsMounted;