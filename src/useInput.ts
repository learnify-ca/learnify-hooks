/* Hooks */
import { useState } from "react";

/* Types */
import { ChangeEvent, InputHTMLAttributes } from "react";

/**
 * @function useInput
 * @param {TextInputDependencies} props
 * @returns {InputHTMLAttributes<HTMLInputElement>}
 */
export const useInput = ({
	type = "text",
	defaultValue,
	...props
}: InputHTMLAttributes<HTMLInputElement>): InputHTMLAttributes<HTMLInputElement> => {
	const [value, setValue] = useState(props.value || defaultValue);

	const handleChange = (e: ChangeEvent<HTMLInputElement>) =>
		setValue(e.target.value);

	return {
		...props,
		type,
		value,
		onChange: props.onChange || handleChange
	};
};

export default useInput;