# Abstract Factory

O padrão de projeto Abstract Factory é um padrão de criação que fornece uma interface para criar famílias de objetos relacionados sem especificar suas classes concretas. Isso significa que você pode criar objetos de diferentes tipos que compartilham uma mesma família de classes.


**Explicação**:
- **Abstract Factory**: Define uma interface para criar objetos abstratos, como fábricas de objetos.
- **Concrete Factory**: Implementa a interface do Abstract Factory para criar objetos concretos.
- **Abstract Product**: Define a interface para um grupo de produtos relacionados.
- **Concrete Product**: Implementa a interface do Abstract Product e representa um produto concreto.
- **Client**: Usa a fábrica abstrata e os produtos abstratos sem se preocupar com as classes concretas específicas.

**Exemplo em TypeScript**:

Vamos criar um exemplo de uma Abstract Factory que cria diferentes tipos de carros: Carro Esportivo e Carro Compacto, com suas variantes de Motor e Chassi.

No exemplo, temos uma Abstract Factory (`CarroFactory`) que define métodos para criar motores e chassis. As Concrete Factories (`CarroEsportivoFactory` e `CarroCompactoFactory`) implementam essa interface para criar produtos específicos. O Cliente usa a fábrica abstrata para criar carros, sem se preocupar com as classes concretas dos motores e chassis. Isso permite criar carros esportivos e compactos de maneira independente.

![Design Pattern Proxy - Sistema de Cache (3)](https://github.com/lucianobajr/software-architecture/assets/45442173/64ffc197-59b4-4375-9fe8-183ae9e564b9)
