import React, { useEffect, useState } from "react";
import { Svg } from "@components";
import { Check, Label, WrapCheck } from "./styles";

import checkEmpty from "@assets/images/icons/check-empty.svg";
import checkFill from "@assets/images/icons/check-fill.svg";

const CheckBox = ({
	children,
	name,
	id,
	getValue,
	value,
	disabled,
	selected = null,
	...props
}) => {
	const [checked, setChecked] = useState(null);

	useEffect(() => {
		selected !== null && setChecked(selected);
	}, [selected]);

	const handleOnChange = (checked) => {
		setChecked(checked);
		getValue && getValue({ checked, value });
	};

	return (
		<WrapCheck disabled={disabled} {...props}>
			<Label htmlFor={id}>
				<Check
					type="checkbox"
					id={id}
					name={name}
					disabled={disabled}
					onChange={({ target }) => handleOnChange(target.checked)}
					value={value}
					checked={checked}
				/>

				<Svg id="checked" icon={checkFill} wsvg={24} mr={10} />
				<Svg id="empty" icon={checkEmpty} wsvg={24} mr={10} />
				{children}
			</Label>
		</WrapCheck>
	);
};

export default CheckBox;
