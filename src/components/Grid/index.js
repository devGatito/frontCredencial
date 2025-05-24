import React from "react";
import styled from "styled-components";
import { SuperCSS } from "@utils";

const GridWrapper = styled.div`
	display: grid;
	${(props) => SuperCSS.hydrate(props)}
`;

const Grid = ({ children, ...props }) => {
	return <GridWrapper {...props}>{children}</GridWrapper>;
};

export default Grid;
