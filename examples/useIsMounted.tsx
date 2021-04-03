import React from "react";

import { useIsMounted } from "../src";

const MyComponent = () => {
	const isMounted = useIsMounted();

	const handleSubmit = (e) => {
		// axios.post()
		// .then(res => {
		//  if(isMounted)// Check if component is still mounted when promise resolves
		//  Handle promise without fear of memory leaks
		// })
	};
};

export default MyComponent;