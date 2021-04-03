import { useReducer, useEffect, Dispatch } from "react";
import { Reducer, Action } from "redux";

interface PersistedReducerProps<S, A extends Action> {
	reducer: Reducer<S, A>;
	initialState: S;
	storage?: Storage;
	key: string
}

/**
 * @function getStateFromLocalStorage
 * @param {string} key key in localStorage of state
 * @param {S} fallbackState fallback initialState if state is not found in localStorage
 * @returns {S} state from localStorage or fallback initialState
 */
const getStateFromLocalStorage = <S>(key: string, fallbackState: S): S => {
	try {
		// Get from local storage by key
		const item = window.localStorage.getItem(key);
		// Parse stored json or if none return initialValue
		return item ? JSON.parse(item) : fallbackState;
	} catch (error) {
		// If error also return initialValue
		console.log(error);
		return fallbackState;
	}
};

/**
 * @function usePersistedReducer
 * @param {PersistedReducerProps}
 * @returns {[S, A]}
 */
const usePersistedReducer = <S, A extends Action>({
	reducer,
	initialState,
	storage = localStorage,
	key,
}: PersistedReducerProps<S, A>): [S, Dispatch<A>] => {
	const [state, dispatch] = useReducer(
		reducer,
		getStateFromLocalStorage(key, initialState)
	);

	useEffect(() => {
		storage.setItem(key, JSON.stringify(state));
	}, [state]);

	return [state, dispatch];
};

export default usePersistedReducer;