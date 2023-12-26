const slider = document.querySelectorAll(".slider");
const btnPrev = document.getElementById("prev-bottom");
const btnNext = document.getElementById("next-bottom");
let currentSlide = 0; //0 é o ponto inicial
function hideSlider() {
  slider.forEach((foto) => foto.classList.remove("on"));
} // foi criada essa function para a remoção da classe 'on', para cada foto(item).
function showSlider() {
  slider[currentSlide].classList.add("on");
} // foi criada essa function, para o slider que tiver na posição 0 do array, add a class 'on'
function nextSlide() {
  hideSlider();
  if (currentSlide === slider.length - 1) {
    currentSlide = 0;
  } else {
    currentSlide++;
  }
  showSlider();
}
function PrevSlide() {
  hideSlider();
  if (currentSlide === 0) {
    currentSlide = slider.length - 1;
  } else {
    currentSlide--;
  }
  showSlider();
}
btnNext.addEventListener("click", nextSlide);
btnPrev.addEventListener("click", PrevSlide);
setInterval(nextSlide, 5000);
 function verificar () {
  const questao1 = document.querySelector("input[type='radio'][name='questao1']:checked").value;
  const questao2 = document.querySelector("input[type='radio'][name='questao2']:checked").value;
  const texto = document.getElementById("res");
  if (questao1 === "verao" && questao2 === "praia" )
  texto.innerHTML = "Brasil seria uma boa opção";
  if (questao1 === "inverno" && questao2 === "historia" )  
  texto.innerHTML = "França seria uma boa opção";
  if (questao1 === "primavera" && questao2 === "natureza" )
  texto.innerHTML = "Japão seria uma boa opção";
  if (questao1 === "primavera" && questao2 === "historia" )
  texto.innerHTML = "Japão seria uma boa opção";
  if (questao1 === "outono" && questao2 === "natureza" )
  texto.innerHTML = "Itália seria uma boa opção";
  if (questao1 === "verao" && questao2 === "historia" )
  texto.innerHTML = "Grécia seria uma boa opção";
  if (questao1 === "outono" && questao2 === "historia" )
  texto.innerHTML = "França seria uma boa opção";
  if (questao1 === "verao" && questao2 === "natureza" )
  texto.innerHTML = "Laos seria uma boa opção";
  // else 
  // texto.innerText = "Brasil seria uma boa opção"
 } 
 