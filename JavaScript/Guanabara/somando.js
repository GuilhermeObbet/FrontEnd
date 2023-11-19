function somar() {
  var tn1 = window.document.querySelector("input#txtn1")
  var tn2 = window.document.querySelector("input#txtn2")
  var res = window.document.querySelector("div#res")
  var n1 = Number(tn1.value)//a caixa input é text, por isso criamos uma variável Number para poder colocar número.
  var n2 = Number(tn2.value)
  var s = n1 + n2
  res.innerHTML = `A soma entre ${n1} e ${n2} é ${s}` // usa o innerHTML para poder sair na tela do site o valor do codigo escrito. 
}