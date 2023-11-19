// sem usar parametros ()
function enter() {
  let entrada = document.querySelector("#digite");
  let resultado = document.querySelector("#res");
  let n = Number(entrada.value);
  if (n % 2 == 0) {
    resultado.innerHTML = `${n} é Par!`;
  } else {
    resultado.innerHTML = `${n} é Impar`;
  }
}

// usando parametros (parametro)

function parImpa (n) {
  if (n%2==0) {
    return `Par!`
  } else {
    return `Impar`
  }
} let res = parImpa(10)
  console.log(res)

  function soma(n1=0, n2=0) { //coloquei recebendo 0 para caso só receber 1 numero e n dar como NaN.
    return n1 + n2
  } let resu = soma(5, 5)
    console.log(resu)