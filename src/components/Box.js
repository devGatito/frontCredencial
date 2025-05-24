import React from "react";
import styled from "styled-components";
import { SuperCSS } from "@utils";

const Wrapper = styled.div`
	width: 100%;
	display: block;
	border: 1px solid transparent;

	${({ inline }) =>
		!inline
			? "box-shadow: 0 2px 10px -5px rgba(0, 0, 0, 0.1);"
			: "border-color: #e3e3e3;"}

	border-radius: 10px;
	${(props) => SuperCSS.hydrate(props)}
`;

const Box = ({ children, ...props }) => (
	<Wrapper {...props}>{children}</Wrapper>
);
export default Box;
