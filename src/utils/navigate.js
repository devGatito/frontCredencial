import { navigate } from "gatsby";

export default (url) => {
	if (typeof window !== "undefined") {
		navigate(url);
	}
};

export const reload = () => {
	if (typeof window !== "undefined") {
		window.location.reload();
	}
};

export const openUrl = (url) => {
	if (typeof window !== "undefined") {
		window.open(url, "_blank");
	}
};
