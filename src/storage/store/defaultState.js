import global from "./global";
import { CONTEXT } from "../../constants/config";

const defaultData = {
	...global,
};

const defaultState =
	typeof window !== "undefined"
		? JSON.parse(sessionStorage.getItem(CONTEXT)) || defaultData
		: defaultData;

export default defaultState;
export { defaultData };
