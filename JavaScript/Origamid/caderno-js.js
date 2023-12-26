// // Seleciona pelo ID
// const animaisSection = document.getElementById('animais');
// const contatoSection = document.getElementById('contato');

// // Retorna null caso não exista
// const naoExiste = document.getElementById('teste');

// // Seleciona pela classe, retorna uma HTMLCollection
// const gridSection = document.getElementsByClassName('grid-section');
// const contato = document.getElementsByClassName('grid-section contato');

// // Seleciona todas as UL's, retorna uma HTMLCollection
// const ul = document.getElementsByTagName('ul');

// // Retorna o primeiro elemento
// console.log(gridSection[0]);

// const animais = document.querySelector('.animais');
// const contato = document.querySelector('#contato');
// const ultimoItem = document.querySelector('.animais-lista li:last-child');
// const linkCSS = document.querySelector('[href^="https://"]');
// const primeiroUl = document.querySelector('ul');

// // Busca dentro do Ul apenas
// const navItem = primeiroUl.querySelector('li');

// const gridSection = document.querySelectorAll('.grid-section');
// const listas = document.querySelectorAll('ul');
// const titulos = document.querySelectorAll('.titulo');
// const fotosAnimais = document.querySelectorAll('.animais-lista img');

// // Retorna o segundo elemento
// console.log(gridSection[1]);

// const titulo = document.querySelector('.titulo');
// const gridSectionHTML = document.getElementsByClassName('grid-section');
// const gridSectionNode = document.querySelectorAll('.grid-section');

// titulo.classList.add('grid-section');

// console.log(gridSectionHTML); // 4 itens
// console.log(gridSectionNode); // 3 itens

// Exercicios
// Retorne no console todas as imagens do site
//   const img = document.querySelectorAll(`img`);
//   console.log(img)
// // Retorne no console apenas as imagens que começaram com a palavra imagem
// const imagem = document.querySelectorAll(`img[src^="../Origamid/img/imagem"]`)
// console.log(imagem)
// // Selecione todos os links internos (onde o href começa com #)
// const linksInterno = document.querySelectorAll('[href^="#"]')
// console.log(linksInterno)
// // Selecione o primeiro h2 dentro de .animais-descricao
// const h2Animais = document.querySelector('.animais-descricao h2')
// console.log(h2Animais)
// // Selecione o último p do site
// const paragrafos = document.querySelectorAll('p')
// console.log(paragrafos[paragrafos.length -1])

//FOREACH

// const imgs = document.querySelectorAll('img');

// imgs.forEach(function(valorAtual, index, array){
//   console.log(item)// o ITEM atual no loop
//   console.log(index)// o número do index
//   console.log(array)// a Array completa
// });

//  const imgs = document.querySelectorAll('img');
//  let i = 0;
//  img.forEach(function(){
//   console.log(i++)
//  }); mostra os numeros de uantidade dos itens

//  const imgs = document.querySelectorAll('img');
//  let i = 0;
//  img.forEach(function(item, index, array){
//   console.log(item, index, array)
// }); //mostra todos os itens detalhados, sempre tem que declarar na function o parametro que quer que mostre, exemplo acima. img.forEach(function(item, index, array){
//console.log(item, index, array)

//ARROW FUNCTION

//metodo normal
// const imgs = document.querySelectorAll('img');
// imgs.forEach(function(item){
//   console.log(item)
// });

// //agora com ARROW FUNCTION
// const imgs = document.querySelectorAll('img');
// imgs.forEach((item) => {
//   console.log(item)
// }); // trocou o function pela seta.

// Mostre no console cada parágrado do site
//   const todosParagrafos = document.querySelectorAll('p')
//   todosParagrafos.forEach((paragrafos) => {
//     console.log(paragrafos)
//   });

//  //Mostre o texto dos parágrafos no console
//  todosParagrafos.forEach((paragrafos) => {
//   console.log(paragrafos.innerText)
// });

//Como corrigir os erros abaixo:
//  const imgs = document.querySelectorAll('img');

//  imgs.forEach((item, index) => {
//    console.log(item, index);
//  });

//  let i = 0;
//  imgs.forEach(() => {
//   console.log(i++);
//  });

//  imgs.forEach(() => i++);

//classList , lasses e atributos

// const menu = document.querySelector('.menu');

// menu.className; // string
// menu.classList; // lista de classes
// menu.classList.add('ativo');
// menu.classList.add('ativo', 'mobile'); // duas classes
// menu.classList.remove('ativo');
// menu.classList.toggle('ativo'); // adiciona/remove a classe
// menu.classList.contains('ativo'); // true ou false
// menu.classList.replace('ativo', 'inativo');

// const animais = document.querySelector('.animais');

// animais.attributes; // retorna todos os atributos
// animais.attributes[0]; // retorna o primeiro atributo

// const img = document.querySelector('img');

// img.getAttribute('src'); // valor do src
// img.setAttribute('alt', 'Texto Alternativo'); // muda o alt
// img.hasAttribute('id'); // true / false
// img.removeAttribute('alt'); // remove o alt

// img.hasAttributes(); // true / false se tem algum atributo

// const animais = document.querySelector('.animais');

// animais.className; // string com o nome das classes
// animais.className = 'azul'; // substitui completamente a string
// animais.className += ' vermelho'; // adiciona vermelho à string

// animais.attributes = 'class="ativo"'; // não funciona, read-only

// Adicione a classe ativo a todos os itens do menu
// const itensMenu = document.querySelectorAll('.menu a')
// itensMenu.forEach((itensMenu)=>{
// itensMenu.classList.add ('ativo')
// console.log(itensMenu)
// })

// // Remove a classe ativo de todos os itens do menu e mantenha apenas no primeiro
// // itensMenu.forEach((itensMenu)=>{
// //   itensMenu.classList.remove ('ativo')
// //   console.log(itensMenu)
// //   })
// // itensMenu[0].classList.add('ativo')//para add só no primeiro

// // // Verifique se as imagens possuem o atributo alt
// //  const imgs = document.querySelectorAll('img')
// //  imgs.forEach((img) =>{
// //   const possuiAtributo =  img.hasAttribute('alt')
// //   console.log(img, possuiAtributo)
// //  })

// // // Modifique o href do link externo no menu
// // const link = document.querySelector('a[href^="http"]')
// // link.setAttribute('href', 'https://www....')
// // //começou com HTTP é sempre um link externo

//  //Dimensões e Distância
//  const section = document.querySelector('.animais');

// section.clientHeight; // height + padding
// section.offsetHeight; // height + padding + border
// section.scrollHeight; // height total, mesmo dentro de scroll

// const section = document.querySelector('.animais');

// // Distância entre o topo do elemento e o topo da página
// section.offsetTop;

// // Distância entre o canto esquerdo do elemento
// // e o canto esquerdo da página
// section.offsetLeft;

// const section = document.querySelector('.animais');

// const rect = section.getBoundingClientRect();
// rect.height; // height do elemento
// rect.width; // width do elemento
// rect.top; // distância entre o topo do elemento e o scroll

// window.innerWidth; // width do janela
// window.outerWidth; // soma dev tools também
// window.innerHeight; // height do janela
// window.outerHeight; // soma a barra de endereço

// window.scrollY; // distância total do scroll vertical
// window.scrollX; // distância total do scroll horizontal

// if(window.innerWidth < 600) {
//   console.log('Tela menor que 600px');
// }

// const small = window.matchMedia('(max-width: 600px)');

// if(small.matches) {
//   console.log('Tela menor que 600px')
// } else {
//   console.log('Tela maior que 600px')
// }

// Verifique a distância da primeira imagem
// const imgDistance = document.querySelector('img');
// imgDistance.getBoundingClientRect();
// if (imgDistance.width <= 80) {
//   console.log('vc está no jogo')
// }else  {
//   console.log('vc excedeu o espaço')
// }
// console.log(imgDistance.width)

// // em relação ao topo da página
// const imgTopDistance = imgDistance.offsetTop;
// console.log(imgTopDistance)

// // Retorne a soma da largura de todas as imagens
// function sumImgs() {
//   const imgsWidth = document.querySelectorAll('img');
//   let soma = 0;
//   imgsWidth.forEach((imgsWidth ) => {
//   soma += imgsWidth.

//   console.log(soma);
// }); //pode ter function dentro de function
// }
// window.onload = function() {
//   sumImgs();
// }

// Verifique se os links da página possuem o mínimo recomendado para telas utilizadas com o dedo. (48px/48px de acordo com o google)
// const link = document.querySelectorAll('a')

// link.forEach((links) => {
//  linkLargura = links.offsetWidth
//  linkAltura = links.offsetHeight
//  if (linkLargura >= 48 && linkAltura >= 48) {
//  console.log(links, 'possui boa acessibilidade')
// } else {
//   console.log(links, 'n possui boa acessibilidade')
// }
// })
// // Se o browser for menor que 720px,
// // adicione a classe menu-mobile ao menu
// const browserSmall = window.matchMedia('(max-width:720px)').matches
// if(browserSmall) {
//   const menu = document.querySelector('.menu')
//   menu.classList.add('menu-mobile')
// }

//addEventListener
// const img = document.querySelector('img')
// img.addEventListener('click', ()=> {
//   console.log('clicou')
// })

// const menu = document.querySelector('.menu a')
// function clicar() {
// console.log('clicou')
// }

// menu.addEventListener('click', clicar)

// const menu = document.querySelector('.menu a')
// function clicar(event) {
// console.log(event)
// }

// menu.addEventListener('click', clicar)

// const img = document.querySelector('img');
// img.addEventListener('click', function {

// });

// const img = document.querySelector('img');
// function callback(event) {
//   console.log(event);
// }
// // img.addEventListener('click', callback)

// const animaisLista = document.querySelector('.animais-lista');
// function callbackLista(event){
//   console.log(event.currentTarget);
//   console.log(event.target);
// }

// animaisLista.addEventListener('click', callbackLista);

// links.forEach((link) => {
//   const linkwidth = link.offsetWidth;
//   const linkHeight = link.offsetHeight;
//   console.log (link)
// });

// const linkExterno = document.querySelector('a[href^="http"]');

// function podeSerQlqrNome() {
//   console.log('Clicou');
// }
// linkExterno.addEventListener('click', podeSerQlqrNome);

// function podeSerQlqrNome(event) {
//   if (event.key === 'f') {
//     document.body.classList.toggle('fullscreen')
//   }
// } // aqui podemos adcionar classes e muitas coisas somente clicando em uma tecla
// window.addEventListener('keydown', podeSerQlqrNome);

// const imgs = document.querySelectorAll('img');
// function podeSerQlqrNome2(event) {
//  console.log(event.target)
// };
// imgs.forEach((podeSerQlqrNome) => {
//   podeSerQlqrNome.addEventListener('click', podeSerQlqrNome2)
// });

//  adicione a classe ativo ao item clicado e remova dos
//  demais itens caso eles possuam a mesma. Previna
//  Quando o usuário clicar nos links internos do site,
//  o comportamento padrão desses links
//  const linkInterno = document.querySelectorAll('a[href^="#"]');
//  function aInterno(event) {
//    event.preventDefault();
//    linkInterno.forEach((link) => {
//     link.classList.remove('ativo')
//    });
//    event.currentTarget.classList.add("ativo");
//  }
//  linkInterno.forEach((a) => {
//    a.addEventListener("click", aInterno);
//  })
//  Selecione todos os elementos do site começando a partir do body,
//  ao clique mostre exatamente quais elementos estão sendo clicados
//  const corpo = document.querySelectorAll("body *");
//  function qlqrNome (event) {
//    console.log(event.target);
//  }
//  corpo.forEach((clicar) => {
//  clicar.addEventListener("click", qlqrNome);
//  });

// Utilizando o código anterior, ao invés de mostrar no console,
// remova o elemento que está sendo clicado, o método remove() remove um elemento
// const remover = document.querySelectorAll("body");
// function qlqrNome1 (event) {
//   console.log(event.target.remove());
// }
// corpo.forEach((clicar) => {
// clicar.addEventListener("click", qlqrNome1);
// });
// Se o usuário clicar na tecla (t), aumente todo o texto do site.
//  function podeSerQlqrNome(event) {
//      if (event.key === 't') {
//       document.body.classList.toggle('hipertexto')
//     }
//   }
//    window.addEventListener('keydown', podeSerQlqrNome);

// const menu = document.querySelector('.menu');

// menu.outerHTML; // todo o html do elemento
// menu.innerHTML; // html interno
// menu.innerText; // texto, sem tags

// menu.innerText = '<p>Texto</p>'; // a tag vai como texto
// menu.innerHTML = '<p>Texto</p>'; // a tag é renderizada

// const lista = document.querySelector('.animais-lista');

// lista.parentElement; // pai
// lista.parentElement.parentElement; // pai do pai
// lista.previousElementSibling; // elemento acima
// lista.nextElementSibling; // elemento abaixo

// lista.children; // HTMLCollection com os filhos
// lista.children[0]; // primeiro filho
// lista.children[--lista.children.length]; // último filho

// lista.querySelectorAll('li'); // todas as LI's
// lista.querySelector('li:last-child'); // último filho

// const lista = document.querySelector('.animais-lista');

// lista.previousElementSibling; // elemento acima
// lista.previousSibling; // node acima

// lista.firstChild; // primeiro node child
// lista.childNodes; // todos os node child

// const lista = document.querySelector('.animais-lista');
// const contato = document.querySelector('.contato');
// const titulo = contato.querySelector('.titulo');

// contato.appendChild(lista); // move lista para o final de contato
// contato.insertBefore(lista, titulo); // insere a lista antes de titulo, o inserido tem que ser filho do selecionado(titulo filho.contato).
// contato.removeChild(titulo); // remove titulo de contato
// contato.replaceChild(lista, titulo); // substitui titulo por lista

// const animais = document.querySelector('.animais');

// const novoH1 = document.createElement('h1');
// novoH1.innerText = 'Novo Título';
// novoH1.classList.add('titulo');

// animais.appendChild(novoH1);

// const titulo = document.querySelector('h1');
// const titulo2 = document.querySelector('h1');
// const novoTitulo = titulo;
// // titulo, titulo2 e novoTitulo são iguais

// const cloneTitulo = titulo.cloneNode(true);
// const contato = document.querySelector('.contato');
// contato.appendChild(cloneTitulo);

// Duplique o menu e adicione ele em copy
//   const menu = document.querySelector('.menu');
//   const cloneMenu = menu.cloneNode(true);
//   const copy = document.querySelector('.copy');

//   copy.insertAdjacentElement('beforeend', cloneMenu);

// // Selecione o primeiro DT da dl de Faq
//   const primeiroFilho = document.querySelector('.faq-lista')
//   console.log(primeiroFilho.children[0]);
//   console.log(primeiroFilho.children[primeiroFilho.children.length-1]);

// // Selecione o DD referente ao primeiro DT
// console.log(primeiroFilho.children[0].nextElementSibling);
// // Substitua o conteúdo html de .faq pelo de .animais

// const tabMenu = document.querySelectorAll(".js-tabMenu li"); //li pra selecionar cada item.
// const tabContain = document.querySelectorAll(".js-tabContain section"); // section para falar com as section.
// if (tabMenu.length && tabContain.length) {
//   tabContain[0].classList.add("ativo");

//   function activeTab(itemFotos) {
//     tabContain.forEach((contain) => {
//       contain.classList.remove("ativo");
//     });
//     tabContain[itemFotos].classList.add("ativo");
//   }

//   tabMenu.forEach((itemMenu, itemFotos) => {
//     itemMenu.addEventListener("click", () => {
//       activeTab(itemFotos);
//     });
//   });
// }




 