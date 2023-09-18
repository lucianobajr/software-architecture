# Solid

![Design Pattern Proxy - Sistema de Cache (1)](https://github.com/lucianobajr/software-architecture/assets/45442173/e27d8b11-e040-4ff0-a5d4-bb9f419eab74)

O princípio SOLID é um conjunto de cinco princípios de design de software que visam criar código mais limpo, modular e de fácil manutenção. Cada letra do acrônimo SOLID representa um princípio específico. Vou explicar cada um deles com exemplos em TypeScript:

01. **S - Princípio da Responsabilidade Única (Single Responsibility Principle)**:

Este princípio afirma que uma classe deve ter apenas uma razão para mudar, ou seja, deve ter apenas uma responsabilidade.

No exemplo, a classe `GerenciadorFuncionarios` tem duas responsabilidades (adicionar funcionários e calcular a folha de pagamento). Seria melhor dividir essas responsabilidades em classes separadas.

02. **O - Princípio Aberto/Fechado (Open/Closed Principle)**:

Este princípio preconiza que as classes devem ser abertas para extensão, mas fechadas para modificação. Ou seja, você deve poder estender o comportamento de uma classe sem alterar seu código fonte.


No exemplo, a classe `Forma` está aberta para extensão. Podemos criar novas formas (por exemplo, um círculo) sem modificar a classe `Forma`.

03. **L - Princípio da Substituição de Liskov (Liskov Substitution Principle)**:

Este princípio diz que objetos de subtipos devem ser substituíveis por objetos de seus tipos base sem afetar a integridade do programa.

No exemplo, a classe `Pinguim` herda o método `voar` da classe `Ave`, embora os pinguins não possam realmente voar. Isso viola o princípio Liskov Substitution. Uma solução seria criar uma interface `IVoar` e implementá-la apenas nas classes que podem voar.

04. **I - Princípio da Segregação de Interface (Interface Segregation Principle)**:
Este princípio afirma que as classes não devem ser forçadas a depender de interfaces que não utilizam. Em outras palavras, uma classe não deve ser obrigada a implementar métodos que não precisa.

No exemplo, a classe `Empregado` é forçada a implementar o método `gerenciar` mesmo que não o utilize. Seria melhor dividir a interface em interfaces menores e específicas.

05. **D - Princípio da Inversão de Dependência (Dependency Inversion Principle)**:
Este princípio sugere que os módulos de alto nível não devem depender de módulos de baixo nível. Ambos devem depender de abstrações. Além disso, detalhes não devem depender de abstrações, mas abstrações devem depender de detalhes.
  
No exemplo, o `Interruptor` depende da abstração `Dispositivo`, e a classe `Lampada` implementa essa abstração. Isso segue o princípio da inversão de dependência. Podemos facilmente trocar o dispositivo (por exemplo, para uma televisão) sem modificar o `Interruptor`.