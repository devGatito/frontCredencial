import styled from "styled-components";

export const WhatsApp = styled.button`
	display: inline-flex;
	align-items: center;
	justify-content: center;
	width: var(--db-whatsapp-size);
	height: var(--db-whatsapp-size);
	min-width: var(--db-whatsapp-size);
	min-height: var(--db-whatsapp-size);
	border-radius: 5rem;

	background-color: var(--db-success);
	cursor: pointer;

	position: fixed;
	bottom: 5%;
	right: 5%;
	z-index: 999;
	transition: all 200ms ease;

	box-shadow: 0 6px 20px -2px rgba(0, 0, 0, 0.2);

	&:hover {
		transform: scale(1.1);
	}
`
