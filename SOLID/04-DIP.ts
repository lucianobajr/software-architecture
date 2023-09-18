// Interface violando o ISP
interface Trabalhador {
  trabalhar();
  gerenciar();
}

class Empregado implements Trabalhador {
  trabalhar() {
    // lógica para trabalhar
  }

  gerenciar() {
    // lógica para gerenciar
  }
}
