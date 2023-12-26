const activeClass = 'ativo'
function initTabNav() {
  //coloquei tudo dentro de uma //??function para se caso usar algum nome já usado, n dar conflito
  const tabMenu = document.querySelectorAll(".js-tabMenu li"); //li pra selecionar cada item.
  const tabContain = document.querySelectorAll(".js-tabContain section"); // section para falar com as section.
  if (tabMenu.length && tabContain.length) {
    tabContain[0].classList.add(activeClass);
    function activeTab(itemFotos) {
      tabContain.forEach((contain) => {
        contain.classList.remove(activeClass);
      });
      tabContain[itemFotos].classList.add(activeClass);
    }
    tabMenu.forEach((itemMenu, itemFotos) => {
      itemMenu.addEventListener("click", () => {
        activeTab(itemFotos);
      });
    });
  }
}
initTabNav();
function initAccordion() {
  const accordionList = document.querySelectorAll(".js-accordion dt");
  if (accordionList.length) {
    function activeAccordion() {
      this.classList.toggle(activeClass);
      this.nextElementSibling.classList.toggle(activeClass);
    }
    accordionList.forEach((item) => {
      item.addEventListener("click", activeAccordion);
    });
  }
}
initAccordion();
const sections = document.querySelectorAll('js-scroll');
function animaScroll () {
}
window.addEventListener('scroll', animaScroll);