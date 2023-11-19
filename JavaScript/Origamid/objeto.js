//OBJETO sempre separado por virgula..
// var pessoa = {
//   nome: `Guilherme Ribeiro`,
//   idade: 33,
//   profissao: `Programador`,
//   possuiFaculdade: true,
// }

// console.log(pessoa)

// var quadrado = {
//   lados: 4, //Objeto
//   area: function(lado) {
//     return lado * lado;
//   }, // quando criar mais de uma func dentro de obj tem que separa-los por virgula, metodo da propriedade

//   perimetro: function (lado) {
//     return this.lados * lado //THIS é o proprio objeto
//   }
// }
// console.log(quadrado.area(5));
// console.log(quadrado.perimetro(5));

// var triangulo = {
//   area: function(base, altura) {
//     return base * altura / 2;
//   }
// }

// console.log(triangulo.area(5,10))

//DOT NOTATION GET

var manu = {
  width: 800,
  height: 50,
  backgroundColor: `blue`,
  metadeHeight() { // METODO que divide a altura por 2
    return this.height / 2;
  }
}

menu.backgroundColor = `black`;
menu.color = `yellow`
menu.esconder = function() {
//a ideia é usar a variavel atribuída com o ponto para fazer oq quiser
}

// Crie um objeto com os seus dados pessoais
// Deve possui pelo menos duas propriedades nome e sobrenome
 var dadosPessoais = {
  nome: `Guilherme`,
  sobrenome: `Ribeiro`,
  idade: 33,
 }


// Crie um método no objeto anterior, que mostre o seu nome completo
dadosPessoais.nomeCompleto = function() {
  return `${this.nome} ${this.sobrenome}`
}

// Modifique o valor da propriedade preco para 3000
var carro = {
  preco: 1000,
  portas: 4,
  marca: 'Audi',
}
carro.preco = 3000; //SET, SETANDO novo valor

// Crie um objeto de um cachorro que represente um labrador,
// preto com 10 anos, que late ao ver um homem

var cachorro = {
  raca: `labrador`,
  cor: `preto`
  idade: 10,
  function latir(homem) {
    if (homem == `homem`) {
      return `latir`
    } else {
      return `nada`
    }
  }
}


// nomeie 3 propriedades ou métodos de strings
var nome = `Guilherme`
nome.slice
nome.valueOf
nome.replace

// nomeie 5 propriedades ou métodos de elementos do DOM
var btn = document.querySelector(`#btn`);
btn.addEventListener;
btn.appendChild;
btn.ariaExpanded;
btn.innerHTML;
btn.outerHTML;

// busque na web um objeto (método) capaz de interagir com o clipboard, 
// clipboard é a parte do seu computador que lida com o CTRL + C e CTRL + V





