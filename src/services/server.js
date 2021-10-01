/* eslint-disable no-return-await */
class Server {
	async getResource(url, obj = null) {
		const response = await fetch(url, obj);
		if (!response.ok) throw new Error(response.status);
		return await response.json();
	}

	getSearchId() {
		return this.getResource('https://front-test.beta.aviasales.ru/search');
	}

	getTickets(searchId) {
		return this.getResource(`https://front-test.beta.aviasales.ru/tickets?searchId=${searchId}`);
	}
}

const server = new Server();

export default server;