import React from "react";
import { ModalOverlay, ModalWrapper, ModalContent } from "./styles";

const Dialog = ({
	show = false,
	position = "top",
	children,
	$overlay = {},
	$wrapper = {},
	$content = {},
}) => {
	return (
		<>
			<ModalOverlay show={show} {...$overlay} />
			<ModalWrapper position={position} show={show} {...$wrapper}>
				<ModalContent show={show} {...$content}>
					{children}
				</ModalContent>
			</ModalWrapper>
		</>
	);
};

export default Dialog;
