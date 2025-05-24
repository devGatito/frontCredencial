import styled, { css } from "styled-components";
import { SuperCSS } from "@utils";
import * as colors from "@constants/colors";

const primaryStyles = css`
	background-color: var(--db-primary);
	color: white;

	&:hover {
		background-color: var(--db-primary-darken-10);
	}
`;

const secondaryStyles = css`
	background-color: var(--db-secondary);
	color: black;

	&:hover {
		background-color: var(--db-secondary-darken-10);
		color: white;
	}
`;

const outlineStyles = css`
	background-color: transparent;
	border: 1px solid var(--db-primary);
	color: black;

	&:hover {
		border-color: var(--db-primary);
		color: white;
	}
`;

const lightStyles = css`
	background-color: var(--db-smoke);
	color: black;

	&:hover {
		background-color: var(--db-smoke-darken-10);
		border-color: var(--db-smoke-darken-10);
	}
`;

const baseStyles = css`
	display: inline-flex;
	background-color: transparent;
	gap: calc(16px / 2);
	align-items: center;
	align-content: center;
	justify-content: center;
	text-align: center;
	position: relative;
	white-space: nowrap;
	transition: all 200ms ease;
	padding: calc(var(--db-font-base)) calc(var(--db-font-base) * 2);
	border: 1px solid transparent;
	border-radius: var(--db-font-base);
	font-weight: 300;
	overflow: hidden;
	cursor: pointer;
	line-height: 1;
	font-size: inherit;

	* {
		margin: 0;
		padding: 0;
	}

	&:disabled,
	&:disabled:hover {
		box-shadow: none;
		background: transparent;
		border: 2px solid #e0e0e0;
		color: #e0e0e0;
		cursor: not-allowed;
	}

	span {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		gap: 20;
	}

	${({ loading }) =>
		loading &&
		css`
			span {
				opacity: 0.2;
				font-size: inherit;
			}
			.loader-button {
				position: absolute;
				left: 40%;
				transform-origin: center center;
				transform: translateX(-50%);
				top: calc(50% - ${({ w }) => w / 2 || 11});
				z-index: 2;
			}
		`}

	${({ theme }) => ["primary"].includes(theme) && primaryStyles}
	${({ theme }) => ["secondary"].includes(theme) && secondaryStyles}
	${({ theme }) => ["outline"].includes(theme) && outlineStyles}
	${({ theme }) => ["light"].includes(theme) && lightStyles}
	${(props) => SuperCSS.hydrate(props)}
`;

const IconCircle = styled.i`
	height: 25px;
	width: 25px;
	border-radius: 40px;
	background-color: #53565a;
	display: inline-block;
	vertical-align: middle;
	text-align: center;
	margin-right: 15px;
	transition: background 100ms linear;
	svg {
		fill: #fff;
		transition: color 100ms linear;
	}
	${(props) => SuperCSS.hydrate(props)}
`;

const Base = styled.button`
	${baseStyles}
`;
const BaseLink = styled.a`
	${baseStyles}
`;

export { Base, BaseLink, IconCircle };
