//var videoGames = [`Swicth`, `PS5`, `XBox`]; 
//videoGames.pop() // remove o último item do array
//videoGames.push(`3DS`) // add um novo item

//LOOP

//for (variavel; condicao(enquanto); incremento(++)) {}

//for (let numero = 0; numero <= 10; numero=numero+5) {
  //console.log(numero)
//}

var games = [`FIFA`, `PES`, `Mortal Kombat`, `BF1`];
for (var best = 0; best < games.length; best++) {
console.log(games[best]) 
if (games[best] == `PES`) {
  break
 }
}
games.forEach(function(best){
  console.log(best)
})


//usei o .lenght pq nem sempre saberemos quantos itens tem na array.

//FOREACH é um método que executa uma função para cada item da Array. forEach, é usada uma function como o exemplo abaixo.

var nomes = [`Guilherme`, `Roberta`, `Carlos`, `Ricardo`];
for(let cadastro = 0; cadastro < nomes.length; cadastro++) {
console.log(nomes[cadastro])
 }
 nomes.forEach(function(cadastro){
  console.log(cadastro)
 })
// não necessariamente precisa ser o mesmo nome da variável usada no FOR, pode ser qualquer nome.

// Crie uma array com os anos que o Brasil ganhou a copa
// 1959, 1962, 1970, 1994, 2002
// Interaja com a array utilizando um loop, para mostrar
// no console a seguinte mensagem, `O brasil ganhou a copa de ${ano}`
var titulosBrasil = [`1959`, `1962`, `1970`, `1994`, `2002`]
for (let copa = 0; copa < titulosBrasil.length; copa++) {
  // console.log(titulosBrasil[copa])
  console.log(`O Brasil ganhou a copa de ${titulosBrasil[copa]}`)
}

// Interaja com um loop nas frutas abaixo e pare ao chegar em Pera
var frutas = ['Banana', 'Maçã', 'Pera', 'Uva', 'Melância']
for (let fruit = 0; fruit < frutas.length; fruit++) {
  console.log(frutas[fruit])
  if (frutas[fruit] ==`Pera`) {
    break
  }
}

// Coloque a última fruta da array acima em uma variável,
// sem remover a mesma da array.
frutas.forEach(function(fruit){
console.log(fruit)
})

