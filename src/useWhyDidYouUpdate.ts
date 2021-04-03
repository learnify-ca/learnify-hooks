import { useEffect, useRef } from "react";

/**
 * Custom hook to check which props caused a component to update
 * @function useWhyDidYouUpdate
 * @since v0.3.0
 * @param {string} name 
 * @param {any} props 
 */
const useWhyDidYouUpdate = <T extends Record<string, unknown>>(name: string, props: T): void => {
	const previousProps = useRef(props);

	useEffect((): void => {
		if (previousProps.current) {
			// Get all keys from previous and current props
			const allKeys = Object.keys({ ...previousProps.current, ...props });
			// Use this object to keep track of changed props
			const changesObj: Record<string, unknown> = {};
			// Iterate through keys
			allKeys.forEach(key => {
				// If previous is different from current
				if (previousProps.current[key] !== props[key]) {
					// Add to changesObj
					changesObj[key] = {
						from: previousProps.current[key],
						to: props[key]
					};
				}
			});

			// If changesObj not empty then output to console
			if (Object.keys(changesObj).length) {
				console.log("[why-did-you-update]", name, changesObj);
			}
		}

		// Finally update previousProps with current props for next hook call
		previousProps.current = props;
	});
};

export default useWhyDidYouUpdate;