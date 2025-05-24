import { useStore } from "@storage";
import { useEffect } from "react";

const initialOptions = {
	refresh: false,
};

const useSchema = (key, options = initialOptions) => {
	const { schema, setSchema } = useStore();

	useEffect(() => {
		const loadSchema = async () => {
			if (schema.version !== null && !options?.refresh) return;

			const payload = await fetch("/api/schema.json");
			const response = await payload.json();
			schema.version < response?.version &&
				setSchema({
					version: response.version,
					payload: response.data,
				});
		};
		loadSchema();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	if (schema.payload && Object.prototype.hasOwnProperty.call(schema.payload, key)) return schema.payload[key];
	console.warn(`Not specific key from getter schema -> ${key || "empty"}`);
	return schema.payload;
};

export default useSchema;
