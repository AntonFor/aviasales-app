/* eslint-disable no-return-await */
class Server {
	async getResource(url, obj = null) {
		const response = await fetch(url, obj);
		if (!response.ok) throw new Error(response.status);
		// return await response.json();
		return response;
	}

	getSearchId() {
		return this.getResource('https://front-test.beta.aviasales.ru/search');
	}
}

const server = new Server();

export default server;