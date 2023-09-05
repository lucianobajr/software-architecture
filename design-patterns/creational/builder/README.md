# Builder

## Links

[Builder](https://refactoring.guru/pt-br/design-patterns/builder)

[Cap. 6: Padrões de Projeto – Engenharia de Software Moderna](https://engsoftmoderna.info/cap6.html#outros-padrões-de-projeto)

[Desing Patterns — Parte 6 — Builder](https://medium.com/xp-inc/desing-patterns-parte-6-builder-f20752fb0c35)

[Builder Design Pattern Explained in 10 Minutes](https://www.youtube.com/watch?v=oP76NM4qZhw&ab_channel=KantanCoding)

---

## Definição

![Untitled-2023-09-05-1059](https://github.com/lucianobajr/software-architecture/assets/45442173/d5b725c0-c1ee-475d-8186-0384ae7c92ef)


<aside>
👉 O padrão de design `Builder` é um padrão criacional que permite a criação de objetos complexos passo a passo. Ele separa a construção de um objeto complexo de sua representação, permitindo que o mesmo processo de construção possa criar diferentes representações.

Imagine que queremos construir uma casa. Podemos começar com uma fundação, depois as paredes, o teto, as portas, janelas e assim por diante. Cada etapa da construção é importante e precisa ser feita na ordem correta para que a casa possa ser construída com sucesso.

Usando o padrão `Builder`, podemos definir cada passo da construção em uma classe separada, e usar uma classe diretor para coordenar a construção. Isso nos permite criar diferentes tipos de casas usando o mesmo processo de construção.

</aside>

---

Em resumo, com o padrão `Builder` construímos objetos complexos passo a passo. Podemos produzir diferentes tipos e representações de um objeto usando o mesmo código de construção.

---

💡 Facilita a instância de objetos que tem muitos atributos, sendo alguns deles opcionais

*Joshua Bloch*

</aside>


❓ GOF

</aside>


**Isso nos leva a problemática**

*inicialização passo a passo trabalhosa de muitos campos e objetos agrupados.*


## Exemplo

Por exemplo, vamos pensar sobre omo criar um objeto `Casa`, com diferentes formatos e especificações. A forma mais simples seria estender a classe base Casa e criar um conjunto de subclasses para cobrir todas as combinações de parâmetros. Porém, isso gera um número maior do que se consegue prever inicialmente de subclasses.

**Pelo padrão `Builder` extraímos o código de construção do objeto para fora de sua própria classe e mova ele para objetos separados chamados *builders.***

O builder pode seguir uma série de etapas, sendo que estas podem ter implementações distintas, devemos sempre priorizar a ordem.

## Diretor

Você pode ir além e extrair uma série de chamadas para as etapas do builder que você usa para construir um produto em uma classe separada chamada *diretor*. A classe diretor define a ordem na qual executar as etapas de construção, enquanto que o builder provê a implementação dessas etapas.

Não é estritamente necessário. Pode ser interessante para colocar rotinas que podem ser reutilizadas.

O diretor **esconde** completamente os detalhes de construção do produto do clinte. Só é necessário associar um builder com um diretor, inciar com o diretor então obter do builder o resultado.

## Implementação

- Contexto da Casa

### Install
```sh
# install
$ pnpm i
```

### Run dev
```sh
$ pnpm dev
```

### Run main js
```sh
$ pnpm main
```

![builder-comic-1-pt-br](https://github.com/lucianobajr/software-architecture/assets/45442173/bf1e51df-90e3-44e7-ad66-ff0e2da5c8c6)

Este exemplo mostra como dois tipos diferentes de casas podem ser construídos usando o mesmo processo de construção, representado pela interface `HouseBuilder`. A classe `House` representa o objeto complexo que está sendo construído, e as classes `BasicHouseBuilder` e `FancyHouseBuilder` implementam os passos para construir uma casa básica ou sofisticada, respectivamente.

# Quando usar?

1. **Use o padrão Builder para se livrar de um "construtor telescópico":** Quando uma classe tem muitos parâmetros opcionais em seu construtor, resultando em chamadas de construtor longas e confusas, o padrão Builder pode ser usado para simplificar a criação de objetos complexos.
2. **Use o padrão Builder quando você quer criar diferentes representações do mesmo produto:** Se você precisa criar objetos que compartilham uma estrutura comum, mas têm diferentes configurações ou detalhes internos, como diferentes tipos de casas (pedra, madeira, etc.), o padrão Builder permite criar essas representações de forma clara e organizada.
3. **Use o padrão Builder quando a construção de um objeto é complexa ou requer vários passos:** Se a criação de um objeto envolve uma série de etapas complexas e a ordem das etapas é importante, o padrão Builder ajuda a garantir que essas etapas sejam executadas na ordem correta.
4. **Use o padrão Builder para configurar objetos em várias etapas:** Quando você precisa configurar um objeto passo a passo e deseja ter a flexibilidade de adicionar ou remover etapas de configuração, o padrão Builder é uma escolha adequada.
5. **Use o padrão Builder para facilitar a legibilidade e manutenção do código:** O uso do padrão Builder pode tornar o código mais legível, especialmente quando se trata de criar objetos complexos com muitos detalhes e opções de configuração. Isso torna mais fácil entender e manter o código ao longo do tempo.
6. **Use o padrão Builder em testes de unidade:** Ao escrever testes de unidade, o padrão Builder pode ser usado para criar objetos de teste complexos com facilidade, permitindo a configuração controlada de objetos para testes específicos.
7. **Use o padrão Builder quando você deseja ocultar a complexidade da construção:** O padrão Builder permite encapsular a lógica de construção em classes específicas, ocultando os detalhes complexos da construção do usuário da classe.
8. **Use o padrão Builder em casos de herança complexa:** Quando você está lidando com hierarquias de classes complexas e a criação de objetos envolve construtores sobrecarregados em várias classes, o padrão Builder pode simplificar o processo de criação de objetos em uma hierarquia.
9. **Use o padrão Builder para criar objetos com parâmetros obrigatórios e opcionais:** Se você tem objetos com parâmetros obrigatórios e muitos parâmetros opcionais, o padrão Builder permite definir os parâmetros obrigatórios no construtor e, em seguida, adicionar os opcionais conforme necessário, melhorando a clareza da criação do objeto.

# Prós e Contras

| Prós | Contras |
| --- | --- |
| Separação de preocupações (Responsabilidade Única) | Complexidade adicional |
| Criação de objetos complexos | Código mais verboso |
| Configuração flexível | Aumento do número de classes |
| Promove a imutabilidade | Necessidade de sincronização (em linguagens concorrentes) |
| Testabilidade | Overhead de memória e desempenho |
