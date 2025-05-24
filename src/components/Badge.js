import React from "react";
import styled, { css } from "styled-components";
import { primary } from "@constants/colors";
import { SuperCSS } from "@utils";

const ThemePrimary = css`
	background-color: ${primary};
	color: white;
`;
const ThemeLight = css`
	background-color: #f6f6f6;
`;
const ThemeAction = css`
	background-color: black;
	color: white;
`;

const Wrapper = styled.span`
	display: inline-flex;
	align-items: center;
	align-content: center;
	justify-content: center;
	line-height: 1.4;
	height: 24px;
	min-width: 24px;
	min-height: 24px;
	padding: 10px;
	border-radius: 30px;
	font-size: 14px;
	font-weight: 300;
	text-transform: capitalize;
	white-space: nowrap;

	${({ theme }) => theme === "primary" && ThemePrimary}
	${({ theme }) => theme === "action" && ThemeAction}
	${({ theme }) => theme === "light" && ThemeLight}

	${(props) => SuperCSS.hydrate(props)}
`;

const Badge = ({ children, ...props }) => (
	<Wrapper {...props}>{children}</Wrapper>
);

export default Badge;
