class Ave {
  voar() {
    console.log("Ave voando");
  }
}

class Pinguim extends Ave {
  // Um pinguim não pode voar, mas a classe ainda mantém o método voar
}
