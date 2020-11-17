export default class ColorService {
	async load(page = 1) {
		let response = await fetch(`https://reqres.in/api/colors?page=${page}`);
		return response.json();
	}
}