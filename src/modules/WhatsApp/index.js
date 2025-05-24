import React, { useEffect, useState } from "react";
import { Flex, Dialog, Text, Button, Svg } from "@components";

import { Form } from "@modules";
import { Links } from "@constants";
import { useStore } from "@storage";
import { useSchema } from "@src/hooks";
import { NavArrowLeft } from "iconoir-react";

import wp from "@assets/images/social/wpw.svg";
import { WhatsApp } from "./styles";

const ModalWhatsApp = () => {
	const { modal, setModal } = useStore();
	const [show, setShow] = useState(false);
	const schema = useSchema("whatsapp", { refresh: true });

	useEffect(() => {
		setShow(schema?.enabled && modal.show && modal.type === "whatsapp");
	}, [modal]);

	const handleShowModal = (type, show) => {
		setModal({
			type,
			show,
		});
	};

	return (
		<>
			<WhatsApp onClick={() => handleShowModal("whatsapp", true)}>
				<Svg icon={wp} $wsvg={40} />
			</WhatsApp>
			<Dialog
				show={show}
				position="bottom"
				$content={{
					$mdMaxw: 400,
					$xsPh: 20,
					$mdPh: 40,
				}}
			>
				<Form
					type="whatsapp"
					title="Contacto vía WhatsApp"
					subtitle="Llena el formulario antes de enviarte directo a WhatsApp"
					getValue={(v) => console.log(v)}
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
		</>
	);
};

export default React.memo(ModalWhatsApp);
