// const nav = document.querySelector("nav");
// const produtos = document.querySelector(".produtos a");

// console.log(nav);
// console.log(produtos);

// let total = 0;

// const compras = 10;
// const luz = 30;

// total = compras + luz;

// const dobro = total * 2;

// console.log(total);
// console.log(dobro);

// // objeto, pois não podemos declarar uma constante já declarad, por isso usamos o objeto.

// const nome = "Senhor dos Anéis";
// const ano = 1954;
// const autor = "J. R. R. Tolkien";

// //objeto
// // escrevemos qualquer propriedades dentro das chaves
//  const livro = {
//    nome: "Senhor dos Anéis", //sempre vírgula
//    ano: 1954,
//    autor: "J. R. R. Tolkien",
//  };

//  const filme = {
//    nome: "Senhor dos anéis",
//    ano: 2001,
//    diretor: "Peter Jackson",
//  };

//  console.log(livro);

// //para vc selecionar uma propriedade de um objeto, vc utiliza o ponto .
 
// console.log(livro.ano);

// let informacoes =
//   "Informações sobre quantos anos fazem desde o lançamento do livro";

// console.log(informacoes);
// console.log(2023 - livro.ano);

// let contatenar =
//   "Contatenar informações sobre o nome do autor com o nome do livro";

// console.log(contatenar);
// console.log(livro.nome + livro.autor);

// var possuiGraduacao = true;

// if(possuiGraduacao) {
//   console.log("É VERDADEIRO");
// } else {
//   console.log('É FALSO')
// }

// if(( 5 - 5) && (5 + 5)) {
//   console.log("Verdadeiro");
// } else {
//   console.log("Falso");
// }

// // este simbolo && retrona o primeiro valor falso, independente se o proximo valor seja verdadeiro.
// // O operador lógico AND ( && ) (conjunção lógica) para um conjunto de operandos booleanos será true se e somente se todos os operandos forem true . Caso contrário, será false .

// var condicional = (5-5) || (5+5) || (20-2);
// console.log(condicional);

// // este simbolo || retorna o primeiro valor true, independente se o primeiro valor seja false. Lembrando que o valor 0 é false.
// //Assim, quando utilizado com valores booleanos, || retorna verdadeiro caso ambos os operandos sejam verdadeiro; se ambos forem falsos, retorna falso.

// var corFavorita = "Azul"

// switch (corFavorita) {
//   case "Azul":
//     //usando : dois pontos para fechar o case.
//   console.log("Olhe para o céu.");
//   break;
//   // break serve para quebrar caso a condição seja verdadeira.
//   default:
//     //default serve para que caso nenhuma seja verdadeira, ocorra a informação fornecida pelo console.log.
//     console.log("Feche os Olhos")
    
// }

// //== (Igual a ou Equal to) - é usado para comparação entre duas variáveis, independentemente do tipo de dados da variável. === (Valor e Tipo igual) - é usado para a comparação entre duas variáveis, mas isso irá verificar o tipo estrito, o que significa que ele irá verificar o tipo de dados e comparar dois valores.


// //Function, sempre que timer um nome atribuido com um parentes ao lado, representa uma função.

// // function area() {
// //   console.log("Função Ativa")
// // }

// // area()

// function areaQuadrado(lado) {
//   return lado * lado;
// }

//  console.log(areaQuadrado(4));

//  function pi() {
//   return 3.14;
//  }
//   var valorTotal = 5 * pi();
//   console.log(valorTotal);

//   function imc(peso, altura) {
//     const imc = peso/(altura**2);
//     return imc;
//   }

//   console.log(imc(80, 1.80));

//   function corGosto(cor) {
//   if(cor === "Azul") {
//   return "Eu gosto de mar";
//   } else if(cor === "Verde") {
//   return "Eu gosto da natureza";
//   } else {
//   return "Eu não gosto de nada";
//   }
//   } 

//   console.log(corGosto("Verde"))

   

  
// //importante

// function terceiraIdade(idade) {
//   if(typeof idade !== "number") {
//     return "Informe sua idade";
//   } else if(idade >= 60) {
//     return true;
//   } else {
//     return false
//   }
// }

// console.log(terceiraIdade(65))

// // o ideal é ter um função que retorna somente um tipo de dados, ou somente boleano, ou somente uma string, só numero.. no exemplo acima está misturado, o ideal seria como abaixo.
// //Estritamente não igual (!==)
// //Estritamente igual (===)

// function terceiraIdade(idade) {
//   if(typeof idade !== "number") {
//     return "Informe sua idade";
//   } else if(idade >= 60) {
//     return "Inicie seu cadastro";
//   } else {
//     return "Volte mais tarde"
//   }
// }

// console.log(terceiraIdade(64))


// // function faltaVisitar(paisesVisitados) {
// //   var totalPaises = 193;
// //   console.log(faltaVisitar = totalPaises - paisesVisitados)
// //   return 'Falta Visitar paises';
// // }

// // console.log(faltaVisitar(40))

// function faltaVisitar(paisesVisitados) {
//   var totalPaises = 193;
//   return `Falta Visitar ${totalPaises - paisesVisitados} paises`;
// }

// console.log(faltaVisitar(40))


// //Escopo lexico
// //


// function dados() {
//   var profissao = "Programador";
//   var nome = "Guilherme";
//   var idade = 33;
//   function outrosDados() {
//     var endereco = "Rio de Janeiro";
//     //var idade = 32;
//     return `${nome}, ${idade}, ${endereco}, ${profissao}`
//   }
//    return outrosDados();
// }
// // Lembrando que numa TAMPLATE STRING ${}, usa-se as aspas invertidas ``
// // Lembrando que para uma variavel funcionar em ambas funções, é preciso que ela esteja FORA das funções. Não somente dentro de uma função.

// console.log(dados())


// // o simbolo !! É muito simples: é uma maneira curta de converter uma variável para ser um valor booleano (verdadeiro ou falso)

// //OBJETOS  

// var pessoa = {
//   nome: "Guilherme Ribeiro",
//   idade: 33,
//   endereco: "Malta",
//   profissao: "Programador",
// }
// É OBRIGATORIO TER AS VIRGULAS NO FINALL

// console.log(pessoa);

// var quadrado = {
//   lados:10,
//   area: function(lado) {
//     return lado * lado;
//   },
//   perimetro: function(lado) {
//     return this.lados * lado;
//   },
// }
// // na atualização do JS Es06, não precisa colocar o function que funciona do mesmo jeito
// //THIS significa é o proprio OBJETO

// console.log(quadrado.area(5))
// console.log(quadrado.perimetro(5))


// var dadosPessoais = {
//   nome: "Guilherme",
//   sobrenome: "Ribeiro",
//   idade: 33,
//   profissao: "Programador", 
  
// }

// dadosPessoais.nomeCompleto = function() {
// return `${this.nome} ${this.sobrenome}`;
// }

// console.log(dadosPessoais.nomeCompleto()) 

//Tudo é Objeto

//para interagir e selecionar com o HTML E CSS, vc precisar falar com o objeto documento DOCUMENT via querySelector, veja abaixo

var btn = document.querySelector(".btn")

btn.addEventListener("click", function() {
  
})


