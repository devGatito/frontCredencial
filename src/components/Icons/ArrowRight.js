import React from "react";

const ArrowRight = ({ color, size, ...props }) => {
	return (
		<svg
			width={size || "32"}
			height={size || "32"}
			viewBox="0 0 32 32"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<path
				d="M12 6L22 16L12 26"
				stroke={color || "black"}
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
};

export default ArrowRight;
