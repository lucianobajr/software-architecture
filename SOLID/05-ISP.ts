// Dependa de abstrações
interface Dispositivo {
  ligar();
  desligar();
}

class Interruptor {
  constructor(private dispositivo: Dispositivo) {}

  ligarDispositivo() {
    this.dispositivo.ligar();
  }

  desligarDispositivo() {
    this.dispositivo.desligar();
  }
}

class Lampada implements Dispositivo {
  ligar() {
    console.log("Lâmpada ligada");
  }

  desligar() {
    console.log("Lâmpada desligada");
  }
}
