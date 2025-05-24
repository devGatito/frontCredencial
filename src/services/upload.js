import ApiClient from "@digitalbooting/request-api";
const NEW_ARRAY_SIZE = 20;

class Upload extends ApiClient {
	constructor() {
		super();
		this._endpoint = null;
	}

	static get endpoint() {
		return this._endpoint;
	}

	static set endpoint(path) {
		this._endpoint = path;
		
	}

	setUrl(path) {
		this.endpoint = path;
		return this;
	}

	async uploadFiles(data) {
		if (data?.files?.length > 20) {
			let filesParts = this.getFilesByParts(data?.files);

			for (let i = 0; i < filesParts.length; i++) {
				const files = filesParts[i];
				const [, reject] = await this.upload({
					...data,
					files,
				});

				if (reject) {
					return [
						null,
						{
							error: 400,
							message: "Error upload file",
							file: files[i],
						},
					];
				}
			}

			return [true, null];
		}

		const [, reject] = await this.upload(data);

		if (reject) {
			return [
				null,
				{ error: 400, message: "Error upload file", file: data.files },
			];
		}

		return [true, null];
	}

	async upload(data) {
		const formData = new FormData();
		const { files } = data;

		for (let key in data) {
			if (key !== "files") {
				formData.append(key, data[key]);
			}
		}

		files.forEach(async (file) => {
			formData.append("files[]", file);
		});

		this.setOptions({
			method: "POST",
		});
		const response = await this.request(this.endpoint, formData, true);
		return response;
	}

	getFilesByParts(files) {
		let $array = [];

		for (let i = 0; i < files.length; i += NEW_ARRAY_SIZE) {
			let elements = files.slice(i, i + NEW_ARRAY_SIZE);

			elements = elements.filter(
				(el) =>
					el !== undefined && el !== null && typeof el === "object",
			);

			$array.push(elements);
		}

		return $array;
	}
}

export default Upload;
