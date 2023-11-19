// var velocidade = 59
// console.log(`Sua velocidade é ${velocidade}Km/h`)
// if(velocidade > 60 ) {
//   console.log("Vc ultrapassou o limite de velocidade")
//   console.log("vc receberá uma multa pelo exesso de velocidade")
// }
// if(velocidade < 60) {
//   console.log("Dirija sempre usando cinto de segurança")
// }

function calcular() {
  var velocidadeFinal = window.document.querySelector("input#velocidade");
  var resultado = window.document.querySelector("div#res");
  var velEntrada = Number(velocidadeFinal.value);
  if (velEntrada > 60) {
    multa.innerHTML = "vc ultrapassou o limite de velocidade";
  }
  res.innerHTML = `Sua velocidade atual é de <strong> ${velEntrada} </strong>Km/h`;
}
