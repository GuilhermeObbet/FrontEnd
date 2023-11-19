// var back = document.querySelector("body")
// back.style.background = "blue"
// var cor = document.querySelector("h1")
// cor.style.color = "white"

function area(lado)  {
  return lado * lado /2
}
console.log(area(10)) 

function circunferencia(raio, c)//Parametro
 {
  var pi = 3.14;
  return 2*pi*raio/c
}

console.log(circunferencia(10, 20)) //Argumento

function cores (cor) {
  if (cor == `verde`) {
    return `Vc gosta da floresta`;
  } else if (cor == `azul`) {
    return `Então vc gosta do Mar`;
  } else {
    return `Escolha outra cor`;
  }
} 
console.log(cores(`preto`))

// Argumentos tbm podem ser funções.

addEventListener(`click`, function(){
  console.log (`oi`)
})

function terceiraIdade (idade) {
 if (typeof idade !== `number`) {
  return window.prompt (`Digite uma idade válida`)
 } else if (idade >= 65) {
  return `Vc tem direito a aposentadoria`
 } else {
  return `Vc n tem direito a aposentadoria`
 }
}
console.log(terceiraIdade(`25`))