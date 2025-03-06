// pegar as li do html .menu-item e guardar em um array

var menuItem = document.querySelectorAll(".menu-item");

function selectLink() {
  menuItem.forEach((item) => item.classList.remove("active"));
  this.classList.add("active");
}

// A função está removendo a classe 'active' a um item que eu não cliquei, e adicionando ao item que eu cliquei.

// Criar escutador de eventos: escuta quando o usuário clica em um item do menu e muda a cor de fundo.

menuItem.forEach((item) => item.addEventListener("click", selectLink));

// Expandir menu

var btnExp = document.querySelector("#btn-exp");
var sideMenu = document.querySelector(".sidebar__navigation");

btnExp.addEventListener("click", function () {
  // adicionar e remover uma classe dinamicamente
  sideMenu.classList.toggle("expand");

  // toggle: se existir, remove a classe. Se não existir, adiciona.
});
