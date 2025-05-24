import React, { useEffect, useState } from "react";
import { Flex, Dialog, Text, Button } from "@components";

import { Links } from "@constants";
import { useStore } from "@storage";
import { ButtonIcon, Image } from "@src/components";
import { useSchema } from "@src/hooks";
import { NavArrowLeft } from "iconoir-react";

const Promotion = () => {
	const { modal, setModal } = useStore();
	const [show, setShow] = useState(false);
	const schema = useSchema("promotion", { refresh: true });

	useEffect(() => {
		setShow(schema?.enabled && modal.show && modal.type === "promotion");
	}, [modal]);

	const handleShowModal = (type, show) => {
		setModal({
			type,
			show,
		});
	};

	return (
		<Dialog
			show={show}
			position="top"
			$content={{
				$mdMaxw: 600,
			}}
		>
			<Image
				width="100%"
				url={schema?.image}
				ratio="1/1"
				fit="cover"
				radius={10}
			/>
			<Flex $justify="center" gap={16}>
				<Button
					theme="light"
					$radius={16}
					onClick={() => handleShowModal(null, false)}
					$padding={6}
				>
					<NavArrowLeft
						width={40}
						height={40}
						strokeWidth={0.6}
						color="var(--db-primary)"
					/>
				</Button>
				<Button
					theme="primary"
					$flex="1"
					onClick={() => handleShowModal("contact", true)}
				>
					{schema?.button}
				</Button>
			</Flex>
			<Text type="span" align="center" $size={12} $opacity="0.6">
				{schema?.legal}
			</Text>
		</Dialog>
	);
};

export default React.memo(Promotion);
