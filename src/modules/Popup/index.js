import React, { useEffect, useState } from "react";
import { Flex, Dialog, Text, Button } from "@components";

import { Links } from "@constants";
import { useStore } from "@storage";
import { useSchema } from "@src/hooks";

const Popup = () => {
	const { modal, setModal } = useStore();
	const [show, setShow] = useState(false);
	const schema = useSchema("privacy", { refresh: true });

	useEffect(() => {
		setTimeout(() => {
			setModal({
				type: "popup",
				show: true,
			});
		}, 2000);
	}, []);

	useEffect(() => {
		setShow(schema?.enabled && modal.show && modal.type === "popup");
	}, [modal]);

	const handleShowModal = (type, show) => {
		setModal({
			type,
			show,
		});
	};

	return (
		<Dialog show={show} position="top">
			<Text align="center">
				Hubo una actualización en el aviso de privacidad,{" "}
				<Text
					type="link"
					href={schema?.link || Links.privacy}
					target="_blank"
					color="var(--db-primary)"
				>
					haz clic aquí
				</Text>{" "}
				para enterarte.
			</Text>
			<Flex $justify="center">
				<Button
					theme="primary"
					onClick={() => handleShowModal(null, false)}
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

export default React.memo(Popup);
