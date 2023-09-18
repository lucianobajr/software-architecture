// Classe aberta para extensão
class Forma {
  calcularArea(): number {
    throw new Error("Método não implementado");
  }
}

// Extensão da classe Forma para um retângulo
class Retangulo extends Forma {
  constructor(private largura: number, private altura: number) {
    super();
  }

  calcularArea(): number {
    return this.largura * this.altura;
  }
}
