import { createClient } from "@digitalbooting/request-api";
import { BASE_URL } from "../constants";

const HEADERS = { "Content-Type": "application/json" };
const Api = createClient(BASE_URL, HEADERS);
export default Api;
