import Api from "./instance";

const getUserIp = async () => {
	const { ip } = await Api.requestIp();
	return ip || null;
};

export default getUserIp;
