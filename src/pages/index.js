import React from "react";
import { useStore } from "../storage/store";


const HomePage = () => {
	const { setModal } = useStore();
	return (
		<Layout>
			<Container></Container>
			<Title>Template Landing</Title>
			<Button
				theme="primary"
				onClick={() =>
					setModal({
						type: "promotion",
						show: true,
					})
				}
			>
				Abrir modal de promocion
			</Button>
		</Layout>
	);
};

export const Head = () => <Seo {...{}} />;
export default HomePage;
