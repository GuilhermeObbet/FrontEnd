// var x = 5;
// var y = 10;
// x += y; // x = x + y (15)
// x -= y; // x = x - y (-5)
// x *= y; // x = x * y (50)
// x /= y; // x = x / y (0.5)
// x %= y; // x = x % y (0)
// x **= y; // x = x ** y (9765625)

//Ternário

var idade = 20;
var podeBeber;
podeBeber = (idade >= 18) ? true : false;
console.log(podeBeber)


//formas de escrever o if e else
var possuiFaculdade = true;
if(possuiFaculdade) console.log('Possui faculdade');
else console.log('Não possui faculdade');

// ou
if(possuiFaculdade)
  console.log('Possui faculdade');
else
  console.log('Não possui faculdade');


  // Some 500 ao valor de scroll abaixo,
// atribuindo o novo valor a scroll
var scroll = 1000;
scroll += 500;

// Atribua true para a variável darCredito,
// caso o cliente possua carro e casa.
// E false caso o contrário.
var possuiCarro = true;
var possuiCasa = true;
var darCredito;

darCredito = (possuiCarro && possuiCasa) ? `Dar cred ao cli` : `Negar cred ao cli`;
console.log(darCredito)