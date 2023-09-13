// Interface para o serviço real
interface DataService {
  fetchData(key: string): Promise<any>;
}

// Serviço real que realiza a operação de busca de dados
class RealDataService implements DataService {
  async fetchData(key: string): Promise<any> {
    // Simula uma operação demorada
    await new Promise((resolve) => setTimeout(resolve, 1000));
    return `Dados para ${key}`;
  }
}

// Proxy que adiciona caching ao serviço real
class CachingProxy implements DataService {
  private cache: { [key: string]: any } = {};
  private realService: RealDataService;

  constructor(realService: RealDataService) {
    this.realService = realService;
  }

  async fetchData(key: string): Promise<any> {
    if (this.cache[key]) {
      console.log(`Dados obtidos do cache para ${key}`);
      return this.cache[key];
    }

    const data = await this.realService.fetchData(key);
    this.cache[key] = data;
    console.log(
      `Dados obtidos do serviço real para ${key} e armazenados em cache`
    );
    return data;
  }
}

// Uso do Proxy
const realDataService = new RealDataService();

const proxy = new CachingProxy(realDataService);
proxy.fetchData("chave1"); // Dados obtidos do serviço real para chave1 e armazenados em cache
proxy.fetchData("chave1"); // Dados obtidos do cache para chave1
proxy.fetchData("chave2"); // Dados obtidos do serviço real para chave2 e armazenados em cache
proxy.fetchData("chave2"); // Dados obtidos do cache para chave2
