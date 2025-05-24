import { useEffect, useState, useCallback } from "react";
import { hasWindow } from "@utils";

const useWidth = () => {
	const $window = hasWindow();

	const [dimensions, setDimensions] = useState(() => {
		if (!$window) {
			return {
				isMobile: null,
				width: null,
				height: null,
			};
		}
		return {
			width: window.innerWidth,
			height: window.innerHeight,
			isMobile: window.innerWidth < 768,
		};
	});

	const getDimensions = useCallback(() => {
		const width = window.innerWidth;
		const height = window.innerHeight;
		return {
			width,
			height,
			isMobile: width < 768,
		};
	}, []);

	useEffect(() => {
		if (!$window) return;
		function handleResize() {
			const dimensions = getDimensions();
			setDimensions(dimensions);
		}

		window.addEventListener("resize", handleResize);
		handleResize();

		return () => window.removeEventListener("resize", handleResize);
	}, [$window, getDimensions]);

	if (!$window) {
		return {
			isMobile: null,
			width: null,
			height: null,
		};
	}

	return dimensions;
};

export default useWidth;
