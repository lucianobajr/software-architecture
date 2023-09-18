// Abstract Product: Motor
interface Motor {
  start(): void;
}

// Concrete Products: Motores específicos
class MotorEsportivo implements Motor {
  start() {
    console.log("Motor esportivo ligado");
  }
}

class MotorCompacto implements Motor {
  start() {
    console.log("Motor compacto ligado");
  }
}

// Abstract Product: Chassi
interface Chassi {
  info(): void;
}

// Concrete Products: Chassis específicos
class ChassiEsportivo implements Chassi {
  info() {
    console.log("Chassi esportivo");
  }
}

class ChassiCompacto implements Chassi {
  info() {
    console.log("Chassi compacto");
  }
}

// Abstract Factory: Fabrica de carros
interface CarroFactory {
  createMotor(): Motor;
  createChassi(): Chassi;
}

// Concrete Factory 1: Fabrica de carros esportivos
class CarroEsportivoFactory implements CarroFactory {
  createMotor(): Motor {
    return new MotorEsportivo();
  }

  createChassi(): Chassi {
    return new ChassiEsportivo();
  }
}

// Concrete Factory 2: Fabrica de carros compactos
class CarroCompactoFactory implements CarroFactory {
  createMotor(): Motor {
    return new MotorCompacto();
  }

  createChassi(): Chassi {
    return new ChassiCompacto();
  }
}

// Client: Usa a fábrica abstrata para criar carros
function produzCarro(factory: CarroFactory) {
  const motor = factory.createMotor();
  const chassi = factory.createChassi();

  motor.start();
  chassi.info();
}

// Uso do padrão Abstract Factory
console.log("Fabricando um Carro Esportivo:");
produzCarro(new CarroEsportivoFactory());

console.log("\nFabricando um Carro Compacto:");
produzCarro(new CarroCompactoFactory());