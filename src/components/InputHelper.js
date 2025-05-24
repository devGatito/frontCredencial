import React from "react";
import { Flex, Col, Tooltip } from "@components";

const InputHelper = ({ children, tooltip, ...props }) => (
	<Flex className="mt:15" {...props}>
		<Col xsWidth="100%" mdWidth="75%">
			{children}
		</Col>
		<Col xsWidth="100%" mdWidth="10%" className="ph:05">
			<Tooltip icon="info" w={250} direction="right">
				{tooltip}
			</Tooltip>
		</Col>
	</Flex>
);

export default InputHelper;
