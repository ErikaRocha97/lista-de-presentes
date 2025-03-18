// ! Funções

function createElement(name, elements = [], attributes = null) {
  if (!Array.isArray(elements) && typeof elements !== "string") {
    [elements, attributes] = [attributes, elements];
    if (elements === null) {
      elements = "";
    }
  }
  const el = document.createElement(name);
  for (const prop in attributes) {
    const attr = attributes[prop];
    if (prop === "style") {
      for (const stl in attr) {
        el.style[stl] = attr[stl];
      }
    } else {
      el.setAttribute(prop, attr);
    }
  }
  // array of elements
  if (Array.isArray(elements) && elements.at(0) instanceof HTMLElement) {
    el.append(...elements);
    // raw HTML
  } else if (typeof elements === "string") {
    el.innerHTML = elements;
    // single element
  } else if (elements instanceof HTMLElement) {
    el.append(elements);
  }
  return el;
}

// ! Adicionar tarefa

const giftForm = document.querySelector("#gift_form");
const addGiftButton = document.querySelector("#add_gift_button");
const giftNameInput = document.querySelector("#gift-name");
const giftImageInput = document.querySelector("#gift-image");
const giftStoreInput = document.querySelector("#gift-store");
const giftPriceInput = document.querySelector("#gift-price");
const giftContainer = document.querySelector("#gift-container");

let gifts = [];

addGiftButton.addEventListener("click", (event) => {
  console.log("Executou");
  // Evitar comportamento padrão de recarregar a pagina ao submeter o formulário
  event.preventDefault();

  // Pegar informações do formulário
  const giftName = giftNameInput.value;
  const giftImage = giftImageInput.value;
  const giftStore = giftStoreInput.value;
  const giftPrice = giftPriceInput.value;

  // Adicionar card no HTML

  const cE = createElement;

  const card = cE("div", { class: "gift-card" }, [
    cE("img", { src: giftImage, class: "gift-image" }),
    cE("span", { class: "gift-name" }, giftName),
    cE("a", { class: "gift-store", href: giftStore }, "Onde comprar"),
    cE("span", { class: "gift-price" }, giftPrice),
    cE("button", { class: "btn-default" }, "Editar"),
  ]);

  giftContainer.appendChild(card);

  // Limpar input
  giftNameInput.value = "";
  giftImageInput.value = "";
  giftStoreInput.value = "";
  giftPriceInput.value = "";
});
