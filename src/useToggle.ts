import { useReducer, DispatchWithoutAction } from "react";

const toggleState = (state: boolean): boolean => !state;

/**
 * @function useToggle
 * @param {boolean} initialValue
 * @returns {[boolean, DispatchWithoutAction]}
 */
const useToggle = (initialValue = false): [boolean, DispatchWithoutAction] =>
	useReducer(toggleState, initialValue);

export default useToggle;