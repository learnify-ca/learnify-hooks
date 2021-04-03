import { useState } from "react";

/**
 * Gradually render new element as the parent component is scrolled
 * @function useInfiniteScroll
 * @param {number} start starting number of elements to be rendered
 * @param {number} pace subsequent number of elements to be rendered
 * @returns {number} limit of elements to render
 */
const useInfiniteScroll = (start = 10, pace = 5): number => {
	const [limit, setLimit] = useState(start);

	window.onscroll = (): void => {
		if (window.innerHeight + document.documentElement.scrollTop === document.documentElement.offsetHeight)
			setLimit(limit + pace);
	};

	return limit;
};

export default useInfiniteScroll;