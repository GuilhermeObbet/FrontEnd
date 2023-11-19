var tituloPrincipal = window.document.querySelector("h1.titulo")
tituloPrincipal.style.color = "red"


  function clicar() {
    var area = window.document.querySelector("div#area")
    area.innerText = "Clicou"
    area.style.background = "black"
    // area.style.border-radius = "5px"
  }
  function  entrou(){
    var area = window.document.querySelector("div#area")
    area.innerText = "Entrou"

  }
  
  function saiu() {
    var area = window.document.querySelector("div#area")
    area.innerText = "Saiu"
    area.style.background = "red"
  }

  //para encontrar qlqr erro é somente entrar no inspect.. devtools..