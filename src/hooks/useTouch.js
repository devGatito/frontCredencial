import { useEffect, useState } from "react";

// hook para propiedades touch.

function useTouch(element) {
	const [touchDirection, setTouchDirection] = useState("none");

	useEffect(() => {
		const el = element?.current;
		let startY, startX;
		function onTouchStart(e) {
			startY = e.touches[0].clientY;
			startX = e.touches[0].clientX;
		}

		function onTouchMove(e) {
			let endY = e.touches[0].clientY;
			let endX = e.touches[0].clientX;
			let touchLeft = startX > endX;
			let touchRight = startX < endX;
			let finalDistanceY =
				endY - startY < 0 ? (endY - startY) * -1 : endY - startY;
			let finalDistanceX =
				endX - startX < 0 ? (endX - startX) * -1 : endX - startX;

			let horizontalTouch = finalDistanceX > finalDistanceY * 4;
			let minSize = finalDistanceX > 100;

			if (touchLeft && horizontalTouch && minSize) {
				setTouchDirection("left");
			}

			if (touchRight && horizontalTouch && minSize) {
				setTouchDirection("right");
			}
		}

		function onTouchEnd() {
			setTouchDirection("none");
		}

		if (el) {
			el.addEventListener("touchstart", onTouchStart);
			el.addEventListener("touchmove", onTouchMove);
			el.addEventListener("touchend", onTouchEnd);

			return () => {
				el.removeEventListener("touchmove", onTouchMove);
				el.removeEventListener("touchstart", onTouchStart);
				el.removeEventListener("touchend", onTouchEnd);
			};
		}
	}, [element]);

	return { touchDirection };
}

export default useTouch;
