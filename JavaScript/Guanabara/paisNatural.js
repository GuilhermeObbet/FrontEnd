function verificar () {
  var natural = document.querySelector("#pais");
  var resultado = document.querySelector("#resultado")
  var pais = (natural.value);
  if (pais == "Brasil") {
    resposta.innerHTML = "Vc é brasileiro"
  } else if (pais != "Brasil") {
      resposta2.innerHTML = "Vc é estrangeiro"
    }
  
  }