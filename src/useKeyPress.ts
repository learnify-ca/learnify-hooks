import { useState } from "react";
import useEventListener from "./useEventListener";

interface Key {
	key: string;
}

/**
 * Detect when a key has been pressed
 * @function useKeyPress
 * @param {string} targetKey code of key
 * @returns {boolean} true if key has been pressed
 */
const useKeyPress = (targetKey: string): boolean => {
	// State for keeping track of whether key is pressed
	const [keyPressed, setKeyPressed] = useState(false);

	// If pressed key is our target key then set to true
	const downHandler = ({ key }: Key) => {
		if (key === targetKey)
			setKeyPressed(true);
	}

	// If released key is our target key then set to false
	const upHandler = ({ key }: Key): void => {
		if (key === targetKey)
			setKeyPressed(false);
	};

	// Handle mounting of event listeners to window
	useEventListener("keydown", downHandler);
	useEventListener("keyup", upHandler);

	return keyPressed;
}

export default useKeyPress;