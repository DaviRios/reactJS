const sections = [
    {
        id: "Introducao",
        header: "Introdução ao JavaScript",
        content: [
            "JavaScript é uma das linguagens de programação mais populares do mundo. Ele é usado principalmente para adicionar interatividade a páginas da web, mas também é utilizado em outras áreas, como desenvolvimento de servidores, aplicativos móveis e muito mais.",
            "Para começar a usar JavaScript, você não precisa instalar nada especial. A maioria dos navegadores modernos já vem com um console onde você pode testar e executar o código JavaScript. Vamos começar a explorar a linguagem diretamente no console do navegador.",
            { type: "subheader", text: "Como abrir o console:" },
            {
                type: "list",
                items: [
                    "Chrome/Firefox (Windows/Linux): Ctrl + Shift + I",
                    "Chrome/Firefox (MacOS): Cmd + Option + I"
                ]
            },
            "Depois de abrir o console, você pode digitar e executar código JavaScript diretamente."
        ]
    },
    {
        id: "Variaveis_Tipos",
        header: "Variáveis e Tipos de Dados",
        content: [
            "Em JavaScript, uma variável é um contêiner para armazenar valores. Existem diferentes tipos de dados que você pode armazenar em variáveis, como números, textos, e até listas de itens.",
            "Vamos explorar os principais tipos de variáveis no console do navegador:",
            { type: "subheader", text: "1. Números Inteiros (int) e Decimais (float)" },
            "Use a palavra-chave let para declarar uma variável:",
            {
                type: "code",
                text: `
  let idade = 25;
  console.log(idade);
  
  
  let altura = 1.75;
  console.log(altura) `
            },
            { type: "subheader", text: "2. Texto (string)" },
            "Strings são usadas para armazenar texto. Elas devem ser escritas entre aspas:",
            {
                type: "code",
                text: `
  let nome = "Davi";
  console.log(nome) `
            },
            { type: "subheader", text: "3. Booleanos" },
            "Um valor booleano pode ser true (verdadeiro) ou false (falso):",
            {
                type: "code",
                text: `
  let aprovado = true;
  console.log(aprovado) `
            },
            { type: "subheader", text: "4. Vetores (Arrays)" },
            "Um vetor (ou array) é uma lista de valores. Os itens no vetor podem ser de qualquer tipo:",
            {
                type: "code",
                text: `
  let numeros = [1, 2, 3, 4, 5];
  console.log(numeros);
  
  
  console.log(numeros[0]) `
            },
            { type: "subheader", text: "5. Matrizes (Arrays de Arrays)" },
            "Uma matriz é um vetor que contém outros vetores:",
            {
                type: "code",
                text: `
  let matriz = [[1, 2], [3, 4], [5, 6]];
  console.log(matriz); 
  console.log(matriz[1][0]) `
            }
        ]
    },
    {
        id: "Atribuicoes_Operacoes",
        header: "Atribuições e Operações",
        content: [
            "Agora que você entende os tipos de variáveis, vamos ver como fazer atribuições e realizar operações com elas.",
            { type: "subheader", text: "1. Atribuição de Valores" },
            "Você pode mudar o valor de uma variável em qualquer momento:",
            {
                type: "code",
                text: `let numero = 10;
    console.log(numero);  // Saída: 10
    numero = 20;
    console.log(numero);  // Saída: 20`
            },
            { type: "subheader", text: "2. Operações Matemáticas" },
            "Você pode realizar operações matemáticas com números:",
            {
                type: "code",
                text: `let soma = 10 + 5;
    console.log(soma);  // Saída: 15
    let subtracao = 10 - 5;
    console.log(subtracao);  // Saída: 5
    let multiplicacao = 10 * 5;
    console.log(multiplicacao);  // Saída: 50
    let divisao = 10 / 5;
    console.log(divisao);  // Saída: 2`
            },
            { type: "subheader", text: "3. Operações com Strings" },
            "Você pode juntar (concatenar) strings com o operador +:",
            {
                type: "code",
                text: `let saudacao = "Olá, " + "mundo!";
    console.log(saudacao);  // Saída: Olá, mundo!`
            },
            { type: "subheader", text: "4. Comparações" },
            "Você pode comparar valores usando operadores de comparação, que retornam true ou false:",
            {
                type: "code",
                text: `console.log(10 == 10);  // Saída: true
    console.log(10 > 5);  // Saída: true
    console.log(5 < 3);  // Saída: false`
            }
        ]
    },
    {
        id: "Exemplo",
        header: "Exemplo de código",
        content: [
            "Vamos agora reunir o aprendizado até aqui para termos um exemplo prático de código, sinta-se à vontade para alterar e usar a sua criatividade.",
            {
                type: "code",
                text: `let nome = "Jessica";
    let idade = 21;
    let altura = 1.66;
    let adulta = true;
    console.log(nome);
    console.log(idade);
    console.log("É maior de idade: " + adulta);
    console.log("Altura: " + altura);
    console.log("Tem menos de 25 anos? " + (idade < 25));
    let idadeTripla = idade * 3;
    console.log(idadeTripla);`
            }
        ]
    },
    {
        id: "Estruturas_Controle",
        header: "Estruturas de Controle",
        content: [
            "As estruturas de controle permitem que você execute diferentes blocos de código com base em condições ou repita uma ação várias vezes.",
            { type: "subheader", text: "1. Condicional if" },
            "Use o if para executar código somente se uma condição for verdadeira:",
            {
                type: "code",
                text: `let idade = 18;
    if (idade >= 18) {
      console.log("Você é maior de idade!");  // Saída: Você é maior de idade!
    }`
            },
            { type: "subheader", text: "2. Estrutura else e else if" },
            "Você pode adicionar condições alternativas:",
            {
                type: "code",
                text: `let idade = 15;
    if (idade >= 18) {
      console.log("Você é maior de idade!");
    } else {
      console.log("Você é menor de idade!");  // Saída: Você é menor de idade!
    }`
            },
            { type: "subheader", text: "3. Estrutura de Repetição for" },
            "Use o for para repetir uma ação várias vezes:",
            {
                type: "code",
                text: `for (let i = 0; i < 5; i++) {
      console.log("Esta é a vez " + i);
    }`
            }
        ]
    },
    {
        id: "Funcoes",
        header: "Funções",
        content: [
            "Uma função é um bloco de código reutilizável que executa uma tarefa específica. Você pode definir uma função usando a palavra-chave function.",
            { type: "subheader", text: "1. Declarando Funções" },
            "Você pode criar uma função que exibe uma mensagem no console:",
            {
                type: "code",
                text: `function saudar() {
      console.log("Olá! Bem-vindo ao nosso tutorial de JavaScript!");
    }
    saudar();  // Saída: Olá! Bem-vindo ao nosso tutorial de JavaScript!`
            },
            { type: "subheader", text: "2. Funções com Parâmetros" },
            "Funções podem receber parâmetros que permitem a passagem de dados:",
            {
                type: "code",
                text: `function saudacao(nome) {
      console.log("Olá, " + nome + "!");
    }
    saudacao("Jessica");  // Saída: Olá, Jessica!`
            },
            { type: "subheader", text: "3. Funções com Retorno de Valores" },
            "Uma função também pode retornar um valor:",
            {
                type: "code",
                text: `function soma(a, b) {
      return a + b;
    }
    console.log(soma(5, 3));  // Saída: 8`
            }
        ]
    },
    {
        id: "Manipulacao_DOM",
        header: "Manipulação do DOM",
        content: [
            "O DOM permite que você manipule o conteúdo HTML usando JavaScript. Vamos ver alguns exemplos.",
            { type: "subheader", text: "1. Acessando Elementos" },
            "Você pode acessar elementos HTML pelo ID:",
            {
                type: "code",
                text: `let header = document.getElementById("navbar");
    console.log(header);`
            },
            { type: "subheader", text: "2. Alterando o Conteúdo" },
            "Você pode alterar o conteúdo de um elemento HTML:",
            {
                type: "code",
                text: `header.innerHTML = "Novo título do tutorial";`
            },
            { type: "subheader", text: "3. Adicionando Eventos" },
            "Você pode adicionar eventos como cliques em um botão:",
            {
                type: "code",
                text: `document.getElementById("meuBotao").addEventListener("click", function() {
      alert("Botão clicado!");
    });`
            }
        ]
    },
    {
        id: "Loops",
        header: "Loops",
        content: [
            "O loop for é uma estrutura que repete uma sequência de instruções um número definido de vezes.",
            {
                type: "code",
                text: `for (let i = 1; i <= 5; i++) {
      console.log("Número " + i);
    }`
            },
            "O exemplo acima exibe os números de 1 a 5 no console."
        ]
    },
    {
        id: "Escopo_Variaveis",
        header: "Escopo de Variáveis e Constantes",
        content: [
            "Em JavaScript, o escopo determina onde uma variável é acessível. Existem três tipos principais de escopo: global, de função e de bloco.",
            { type: "subheader", text: "1. Variáveis Globais" },
            "Variáveis declaradas fora de qualquer função são globais e acessíveis em qualquer parte do código.",
            { type: "subheader", text: "2. Variáveis Locais e de Função" },
            "Variáveis declaradas dentro de uma função só podem ser acessadas dentro dela.",
            { type: "subheader", text: "3. Escopo de Bloco" },
            "Usando `let` e `const`, é possível limitar o escopo de uma variável a um bloco específico, como dentro de uma condicional ou loop.",
            "Exemplo de escopo de variáveis:",
            {
                type: "code",
                text: `const PI = 3.14;
let raio = 5;
if (raio > 0) {
  let area = PI * raio * raio;
  console.log(area);  // Saída: 78.5
}
// console.log(area); // Erro, área não está acessível fora do bloco`
            }
        ]
    },
    {
        id: "Objetos",
        header: "Objetos",
        content: [
            "Objetos são estruturas que permitem armazenar dados em pares de chave-valor. Eles são essenciais em JavaScript para representar entidades complexas.",
            { type: "subheader", text: "Criando e Acessando Objetos" },
            "Para criar um objeto, defina-o com chaves `{}` e atribua valores usando pares chave-valor.",
            {
                type: "code",
                text: `let pessoa = { nome: "Carlos", idade: 30, altura: 1.8 };
console.log(pessoa.nome);  // Saída: Carlos
pessoa.idade = 31;
console.log(pessoa.idade);  // Saída: 31`
            }
        ]
    },
    {
        id: "Metodos_Arrays",
        header: "Métodos de Arrays",
        content: [
            "JavaScript oferece métodos integrados para manipular arrays de várias formas. Vamos explorar alguns métodos comuns.",
            { type: "subheader", text: "1. Adicionando e Removendo Elementos" },
            "Você pode usar `push` para adicionar ao final, `pop` para remover do final, `shift` para remover do início e `unshift` para adicionar ao início do array.",
            { type: "subheader", text: "2. Manipulação com map, filter e reduce" },
            "Esses métodos são úteis para transformar, filtrar e reduzir arrays.",
            {
                type: "code",
                text: `let numeros = [1, 2, 3, 4];
let quadrados = numeros.map(num => num * num);
console.log(quadrados);  // Saída: [1, 4, 9, 16]`
            }
        ]
    },
    {
        id: "Funcoes_Ordem_Superior",
        header: "Funções de Ordem Superior e Callbacks",
        content: [
            "Funções de ordem superior recebem outras funções como parâmetros. Elas são essenciais para um estilo funcional em JavaScript.",
            { type: "subheader", text: "Exemplo de Callback" },
            "Aqui, `executaOperacao` recebe uma função como argumento e a executa com os valores fornecidos.",
            {
                type: "code",
                text: `function executaOperacao(a, b, operacao) {
  return operacao(a, b);
}
let resultado = executaOperacao(5, 3, (x, y) => x + y);
console.log(resultado);  // Saída: 8`
            }
        ]
    },
    {
        id: "Classes",
        header: "Classes e Programação Orientada a Objetos (POO)",
        content: [
            "Classes são estruturas para criar objetos com propriedades e métodos compartilhados. JavaScript permite criar classes com a palavra-chave `class`.",
            { type: "subheader", text: "Definindo uma Classe" },
            "Abaixo, criamos uma classe `Carro` com propriedades `marca` e `modelo` e um método `descricao`.",
            {
                type: "code",
                text: `class Carro {
  constructor(marca, modelo) {
    this.marca = marca;
    this.modelo = modelo;
  }
  descricao() {
    return \`Carro: \${this.marca} \${this.modelo}\`;
  }
}
let meuCarro = new Carro("Toyota", "Corolla");
console.log(meuCarro.descricao());  // Saída: Carro: Toyota Corolla`
            }
        ]
    },
    
];

export default sections;
