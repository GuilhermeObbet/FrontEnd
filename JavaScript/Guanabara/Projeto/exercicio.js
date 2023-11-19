// var nome = document.body;
// nome.style.background = "black";
// var titulo = document.querySelector("#principal");
// titulo.style.color = "whitesmoker";

function startTime() {
  var msg = document.querySelector("#msg");
  var img = document.querySelector(".imagem");
  var txt = document.querySelector("#texto");
  var data = new Date();
  var hora = data.getHours();
  var minute = ("0" + data.getMinutes()).slice(-2);
  var segundos = data.getSeconds();
  setTimeout(startTime, 1000)
  
  msg.innerHTML = `Agora são ${hora}:${minute}:${segundos} horas.`;
  if (hora >= 0 && hora < 12) {
    document.body.style.background = "#eca9a0";
    img.src = `/fotos/manha.jpg`;
    txt.innerHTML = `Bom Dia!`;
  } else if (hora >= 12 && hora < 18) {
    document.body.style.background = "#fad75b";
    img.src = `/fotos/tarde.jpg`;
    txt.innerHTML = `Boa Tarde!`;
  } else {
    document.body.style.background = "black";
    img.src = `/fotos/noite.jpg`;
    txt.innerHTML = `Boa noite!`;
  }
}
