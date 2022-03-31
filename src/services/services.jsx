export default class AviasalesService {
    URL = 'https://front-test.beta.aviasales.ru/search';

    async getResource(url) {
      const res = await fetch(url);

      if (!res.ok) {
        throw new Error(
          // eslint-disable-next-line no-useless-concat
          `Could not fetch ${url}` + `, received ${res.status}`,
        );
      }

      return res.json();
    }

    async getId() {
      return await this.getResource(`${this.URL}`);
    }

    async getTickets({ searchId }) {
      return await this.getResource(
        `https://front-test.beta.aviasales.ru/tickets?searchId=${searchId}`,
      );
    }
}
