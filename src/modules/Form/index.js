import React, { useState } from "react";
import { Flex, Input, Title, Text } from "@components";

const initialState = {
	SingleLine: "",
};

const Form = ({  title, subtitle,  }) => {
	const [data, setData] = useState(initialState);

	const update = (key, value) => {
		setData({
			...data,
			[key]: value,
		});
	};

	return (
		<Flex $direction="column" $gap={20}>
			<Title type="h2" $marginless>
				{title || "Contáctanos"}
			</Title>
			{subtitle && (
				<Text type="span" $xsSize={14}>
					{subtitle}
				</Text>
			)}
			<Input
				placeholder="Nombre"
				value={data.SingleLine}
				getValue={(v) => update("SingleLine", v)}
				styles={{
					$radius: 16,
				}}
			/>
		</Flex>
	);
};

export default React.memo(Form);
