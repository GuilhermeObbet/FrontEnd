const titulo = document.querySelector(`.title`);
const classe  = titulo.classList

titulo.addEventListener(`click`, function(){
  console.log(`Clicou em `, titulo.innerText)
})