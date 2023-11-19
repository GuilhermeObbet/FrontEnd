/*window.alert("Minha primeira menssagem!");
window.confirm("Está gostando do curso?")
window.prompt("Qual é o seu nome?")*/

// var nome = window.prompt("Qual é o seu nome?");
// window.alert(`Seja muito bem vindo, ${nome}`);

//var n1 = window.prompt("Digite um número: ");
//var n2 = window.prompt("Digite outro número: ")
// var s = n1 + n2 // nesse caso não irá funcionar, pouis o numero digitado é uma string.

//para converter uma string para um numero, usa, Number.parseInt, parea numeros inteiros, ou Number.parseFloat, para fracao.

//tbm é possivem usar somente Number, que ele automaticamente faz o calculo de real ou float, fracao.

// var n3 = Number.parseInt(window.prompt("Digite um número: "));
// var n4 = Number.parseInt(window.prompt("Digite outro número: "));
// var s = n3 + n4

//  var n3 = Number(window.prompt("Digite um número: "));
//  var n4 = Number(window.prompt("Digite outro número: "));
//  var s = n3 + n4
//  window.alert(`A soma dos valores é: ${s}` )

// var n1 = 1545.5

// console.log(n1.toFixed(2))
// console.log(n1.toFixed(2).replace(".",","))
// console.log(n1.toLocaleString("pt-BR", {style: "currency", currency: "BRL"}))

//TENÄRIO

// var idade = 15;
// var tenario = idade >= 18 ? "MAIOR" : "MENOR"

// console.log(tenario, idade)

//DOM
//Selecionando TAG do HTML com O JS
//window.document.getElementById // ligando por ID
//window.document.getElementsByClassName // Ligando por classe

var paragrafo1 = window.document.getElementsByTagName("p")[0]
//coloquei 0 dentro do cochete para dizer a ordem do paragrafo que quero selecionar. 0 é o primeiro, 1 o segundo e assim sucessivamente.
window.document.write(paragrafo1.innerText);
var corpo = window.document.body
corpo.style.background = "black"
paragrafo1.style.color = "white"
//innerText pega a tag sem a formatacao, sem os estilos dados, ja o innerHTMl pega com a formatacao

// selecionando por querySelector

var titulo1Principal = window.document.querySelector("h1.titulo")
//lembrando que usa o . apos a tag somente se for classe, se for ID usa #
titulo1Principal.style.color = "white"




