import React from "react";
import { Base } from "./styles";
import { Loader, Svg, Tooltip, Text } from "@components";

import show from "@assets/images/icons/eye.svg";
import close from "@assets/images/icons/close.svg";

//social
import facebook from "@assets/images/social/fb.svg";
import instagram from "@assets/images/social/in.svg";
import twitter from "@assets/images/social/tw.svg";
import whatsapp from "@assets/images/social/wp.svg";
import youtube from "@assets/images/social/yt.svg";
import share from "@assets/images/social/sh.svg";
import arrowl from "@assets/images/icons/arrow-l.svg";
import arrowr from "@assets/images/icons/arrow-r.svg";
import aleft from "@assets/images/icons/aleft.svg";
import aright from "@assets/images/icons/aright.svg";

const dataIcon = {
	close,
	show,
	facebook,
	instagram,
	twitter,
	whatsapp,
	youtube,
	share,
	arrowl,
	arrowr,
	aleft,
	aright,
};

const ButtonIcon = ({
	children,
	mobile,
	loading,
	icon,
	direction,
	w,
	widthTooltip,
	sizeIcon,
	tooltip,
	small,
	name,
	width,
	nohover,
	...props
}) => {
	return (
		<>
			{tooltip && (
				<Tooltip
					direction={direction}
					w={widthTooltip}
					element={
						<Base
							nohover={nohover}
							w={width}
							small={small}
							icon={icon}
							name={name}
							aria-label={name}
							type="button"
							{...props}
						>
							{loading && <Loader w={20} />}
							{icon && <Svg icon={dataIcon[icon]} wsvg={w} />}
						</Base>
					}
				>
					<Text size={12} weight="500" align="center">
						{tooltip}
					</Text>
				</Tooltip>
			)}

			{!tooltip && (
				<Base
					nohover={nohover}
					w={width}
					icon={icon}
					name={name}
					aria-label={name}
					type="button"
					{...props}
				>
					{loading && <Loader w={w} />}
					{icon && <Svg icon={dataIcon[icon]} wsvg={w} />}
				</Base>
			)}
		</>
	);
};

export default ButtonIcon;
