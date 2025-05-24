import React from "react";
import { Alert, AlertContent, AlertIcon, AlertSvg } from "./styles";

import { Svg } from "../../components";

import close from "../../assets/images/icons/close.svg";
import info from "../../images/icons/alert-info.svg";
import success from "../../images/icons/alert-success.svg";
import warning from "../../images/icons/alert-warning.svg";
import danger from "../..//images/icons/alert-danger.svg";

const getType = {
	info,
	success,
	warning,
	danger,
};

function Index({
	children,
	type,
	align,
	noClose,
	className,
	onClose,
	...props
}) {
	return (
		<Alert type={type} align={align} className={className} {...props}>
			<AlertIcon>
				<AlertSvg type={type}>
					<Svg icon={getType[type]} wsvg={28} />
				</AlertSvg>
			</AlertIcon>

			<AlertContent>{children}</AlertContent>

			{!noClose && (
				<Svg
					icon={close}
					wsvg={28}
					style={{ cursor: "pointer" }}
					onClick={() => onClose()}
				/>
			)}
		</Alert>
	);
}

export default Index;
