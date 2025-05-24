const global = {
	route: [],
	isLoading: false,
	fingerprint: null,
	auth: {
		token: null,
		authenticated: false,
		isAnonymous: true,
	},
	error: {
		show: null,
		message: null,
	},
	utm: {
		url: "",
		utm_id: "",
		utm_source: "",
		utm_campaign: "",
		utm_content: "",
		utm_medium: "",
		utm_terms: "",
		sender: false,
	},
	modal: {
		type: null,
		show: false,
	},
	schema: {
		version: null,
		payload: null,
	},
	setUTM: () => {},
	setRoute: () => {},
	setError: () => {},
	setIsLoading: () => {},
	setFingerprint: () => {},
	setAuth: () => {},
	setModal: () => {},
	setSchema: () => {},
	updateStore: () => {},
};

export default global;
