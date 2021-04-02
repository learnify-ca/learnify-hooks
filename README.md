# Learnify Hooks
Hooks for common use cases in React.

## Installation
```
npm install @learnify/hooks
```

## Usage
### useInterval

### useIsMounted
Returns a boolean stating whether the component is mounted
```
import { useEffect } from "react";
import { useIsMounted } from "@learnify/hooks";

const MyComponent = () => {
	const isMounted = useIsMounted(); // true if component is mounted

	const handleSubmit = e => {
		e.preventDefault();

		axios.post()
		.then(res => {
			if(isMounted)
			// Continue operation without fear of memory leaks
		})
	};
}
```

### usePrev
Built on top of `useRef` to track the previous value of a variable.
```
import { useState } from "react";
import { usePrev } from "@learnify/hooks";

const MyComponent = () => {
	const [isToggled, setIsToggled] = useState(false);

	const prevIsToggled = usePrev(isToggled); // returns the value of isToggled on the last render

	/* Rest of component*/
};
```

### useTimeout

## Contributing
Contributions are what make the open source community such an amazing place to be learn, inspire, and create. This library was started by the Learnify team, but we want this to be a place for people to come to when looking for hooks solutions to any common use cases in React, so any contributions you make are greatly appreciated.

## License
Distributed under the ISC License. See `LICENSE.md` for more information.

## Contact
Richard Antao - richardantao@learnify.ca

## Acknowledgements
