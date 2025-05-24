import { useEffect, useState } from "react";

// Hook para propiedades de scrooll en un elemento especifico.
function useScrollElement(ref) {
	const [isScrolling, setIsScrolling] = useState(false);

	useEffect(() => {
		const element = ref?.current;
		let timeout;

		function onScroll() {
			setIsScrolling(true);
			checkScroll();
		}

		function checkScroll() {
			window.clearTimeout(timeout);
			timeout = window.setTimeout(function () {
				setIsScrolling(false);
			}, 100);
		}

		if (element) {
			element.addEventListener("scroll", onScroll);
			return () => element.removeEventListener("scroll", onScroll);
		}
	}, [ref]);

	return { isScrolling };
}

export default useScrollElement;
