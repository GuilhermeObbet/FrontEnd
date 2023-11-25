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

// function pegarBotaoClicado(s, e) {
//   let send = s;
//   let event = e;

//   switch(send){
// case "insta":

// break;

//   }
// }
