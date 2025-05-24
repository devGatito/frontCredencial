import { SuperCSS } from "@src/utils";
import styled, { css } from "styled-components";

const renderPosition = (position) => {
	switch (position) {
		case "top":
			return css`
				transform: translateY(-100%);
			`;
		case "bottom":
			return css`
				transform: translateY(100%);
				align-items: flex-end;
			`;
		case "center":
			return css`
				transform: translateY(40%);
				align-items: center;
			`;
		default:
			return css``;
	}
};

const hideModal = css`
	transition: transform 400ms ease-in;

	&,
	* {
		pointer-events: all;
	}
`;

const showModal = css`
	transition: transform 400ms eas-out;

	opacity: 1;
	transform: translateY(0px);

	&,
	* {
		pointer-events: all;
	}
`;

export const ModalOverlay = styled.div`
	display: block;
	pointer-events: none;
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	z-index: 9999;

	background-color: rgb(from black r g b / 0.4);
	backdrop-filter: blur(2px);
	transition: opacity 200ms linear;
	opacity: ${({ show }) => (show ? 1 : 0)};
	${(props) => SuperCSS.hydrate(props)}
`;

export const ModalWrapper = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	z-index: 99999;
	padding-block: 2rem;

	display: flex;
	width: 100%;
	height: 100%;

	align-items: flex-start;
	justify-content: center;
	transform: translateY(-100%);
	opacity: 0;

	transition-delay: 600ms;
	transition: transform 400ms linear;

	${({ position }) => renderPosition(position)}
	${({ show }) => (show ? showModal : hideModal)}
	${(props) => SuperCSS.hydrate(props)}
`;

export const ModalContent = styled.div`
	display: flex;
	flex-direction: column;
	gap: 10px;

	align-items: center;
	justify-content: center;
	align-content: center;
	width: 100%;
	max-width: 80%;
	padding-block: 20px;
	padding-inline: 40px;

	background-color: white;
	border-radius: 20px;

	@media screen and (min-width: 600px) {
		max-width: 400px;
	}

	${(props) => SuperCSS.hydrate(props)}
`;
