import styled, { css } from "styled-components";
import { SuperCSS } from "@src/utils";

const WrappInput = styled.div`
	font-family: inherit;
	font-size: inherit;
	height: ${(props) => (props.small ? "44px" : "54px")};
	width: 100%;
	background-color: ${({ disabled }) => (disabled ? "#F6F6F6" : "white")};
	border: 1px solid transparent;

	border-color: ${({ hasError, hasWarning, hasFocus, disabled }) => {
		if (hasWarning) {
			return "#e48d00";
		}
		if (hasError) {
			return "#E82A4D";
		}
		if (hasFocus) {
			return "#768692";
		}
		if (disabled) {
			return "rgba(83,86,90,0.4)";
		} else {
			return "#d1d9e5";
		}
	}};

	${({ hasError, hasWarning }) => {
		if (hasWarning) {
			return "box-shadow: 0 0 0 4px rgba(228,141,0,0.2);";
		}
		if (hasError) {
			return "box-shadow: 0 0 0 4px rgba(232,42,77,0.2);";
		}
	}}

	position: relative;
	border-radius: 8px;
	${(props) => SuperCSS.hydrate(props)}
`;

const ItemInput = styled.input`
	border: none;
	outline: none;
	padding: 22px 40px 8px 16px;
	background: transparent;
	position: absolute;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
	width: 100%;
	height: 100%;
	z-index: 2;
	font-size: inherit;
	color: #707372;
	font-weight: 300;
	text-align: ${({ align }) => (align ? align : "left")};
	cursor: ${({ disabled }) => (disabled ? "not-allowed" : "initial")};
	&::-webkit-outer-spin-button,
	&::-webkit-inner-spin-button {
		-webkit-appearance: none;
		margin: 0;
	}

	&:disabled {
		& ~ .actionButton {
			display: none;
		}
	}

	${(props) => SuperCSS.hydrate(props)}
`;

const Label = styled.label`
	color: #a3aed0;
	font-weight: 300;
	font-size: ${({ hasFocus }) => (hasFocus ? "70%" : "inherit")};
	padding: 0;
	line-height: 1;
	background: transparent;
	position: absolute;
	top: ${({ hasFocus }) => (hasFocus ? "4px" : "16px")};
	bottom: 0;
	left: 14px;
	right: 0;
	width: auto;
	text-align: ${({ right }) => (right ? "right" : "left")};
	pointer-events: none;
	z-index: 1;
	transition:
		font-size 150ms ease-in-out,
		border-width 150ms ease-in-out,
		border-color 150ms ease-in-out,
		top 100ms ease-in-out;

	${(props) => SuperCSS.hydrate(props)}
`;
const Label2 = styled.span`
	color: #a3aed0;
	font-weight: 300;
	font-size: ${({ hasFocus }) => (hasFocus ? "70%" : "inherit")};
	padding: 0;
	line-height: 1;
	background: transparent;
	position: absolute;
	top: ${({ hasFocus }) => (hasFocus ? "4px" : "16px")};
	bottom: 0;
	left: 14px;
	right: 0;
	width: auto;
	text-align: ${({ right }) => (right ? "right" : "left")};
	pointer-events: none;
	z-index: 1;
	transition:
		font-size 150ms ease-in-out,
		border-width 150ms ease-in-out,
		border-color 150ms ease-in-out,
		top 100ms ease-in-out;

	${(props) => SuperCSS.hydrate(props)}
`;

const ErrorMessage = styled.em`
	color: #e4002b;
	font-size: 12px;
	position: absolute;
	right: 0;
	bottom: -20px;

	${(props) => SuperCSS.hydrate(props)}
`;

const WarningMessage = styled.em`
	color: #e48d00;
	font-size: 12px;
	position: absolute;
	right: 0;
	bottom: -20px;

	${(props) => SuperCSS.hydrate(props)}
`;

const IconFinger = styled.span`
	min-width: ${(props) => (props.small ? "44px" : "54px")};
	min-height: ${(props) => (props.small ? "44px" : "54px")};
	width: ${(props) => (props.small ? "44px" : "54px")};
	height: ${(props) => (props.small ? "44px" : "54px")};

	display: flex;
	align-items: center;
	justify-content: center;
	position: absolute;
	right: 0;
	top: 0;
	opacity: 0.7;
	cursor: pointer;
	z-index: 2;
	${(props) => SuperCSS.hydrate(props)}
`;

export {
	WrappInput,
	ItemInput,
	Label,
	ErrorMessage,
	WarningMessage,
	IconFinger,
	Label2,
};
