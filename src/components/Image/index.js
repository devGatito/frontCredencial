import React, { useRef, useEffect } from "react";
import { Wrapper } from "./styles";

function Image({
	url,
	name,
	fit = "contain",
	imagePosition,
	children,
	blur = "",
	ratio,
	radius,
	...props
}) {
	const ref = useRef();

	useEffect(() => {
		if (!ref.current) return;
		const observer = new IntersectionObserver(
			(entries) => {
				const entry = entries[0];
				if (entry.isIntersecting) {
					let lazyImage = entry.target;
					lazyImage.src = lazyImage.dataset.src;
					lazyImage.classList.add("load");
					observer.unobserve(lazyImage);
				}
			},
			{
				threshold: 0.1,
			},
		);
		observer.observe(ref.current);
	}, [ref, url]);

	return (
		<Wrapper {...props} backdropFilter={blur}>
			{children}
			<img
				ref={ref}
				className="lazy"
				loading="lazy"
				width={1}
				height={1}
				data-src={url}
				alt={name || "image property of ancaoputfit.com"}
				style={{
					objectFit: fit,
					objectPosition: imagePosition || "center",
					aspectRatio: ratio,
					borderRadius: radius,
				}}
			/>
		</Wrapper>
	);
}

export default Image;
