import { useEffect } from "react";

/**
 * Handle event listener adding/removal of event
 * @function useEventListener
 * @param {K extends keyof WindowEventMap} name name of event
 * @param {C extends EventListener} cb callback to run on event
 * @param {C extends EventListener} array of depe
 * @returns {void}
 */
const useEventListener = <K extends keyof WindowEventMap, T>(
	event: K,
	listener: (this: Window, ev: WindowEventMap[K]) => T
): void => useEffect(
	(): () => void => {
		window.addEventListener(event, listener);

		return (): void => {
			window.removeEventListener(event, listener);
		};
	},
	[]
);

export default useEventListener;