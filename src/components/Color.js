import React from "react";
import styled from "styled-components";
import { primary } from "@constants/colors";

const Wrapper = styled.div`
	display: inline-flex;
	position: relative;

	.whiteColor {
		display: inline;
		text-align: center;
		position: absolute;
		top: calc(50% - 11px);
		left: calc(50% - 11px);
		font-size: 22px;
		z-index: 2;
		opacity: 0.2;
		pointer-events: none;
	}
`;

const ColorElement = styled.button`
	display: inline-flex;
	width: 40px;
	min-width: 40px;
	height: 40px;
	min-height: 40px;
	cursor: pointer;

	border-radius: 14px;
	background-color: ${({ color }) => color || "white"};
	box-shadow:
		0 0 0 2px white,
		0 0 0 6px #f1f1f1;

	transition: box-shadow 200ms ease;

	&.active,
	&:hover {
		box-shadow:
			0 0 0 2px white,
			0 0 0 6px ${primary};
	}
`;

const Color = ({ getValue, color, value, ...props }) => (
	<Wrapper>
		<ColorElement
			color={color}
			onClick={() => getValue && getValue(value)}
			{...props}
		/>
		{color === "white" && <span className="whiteColor">W</span>}
	</Wrapper>
);

export default Color;
