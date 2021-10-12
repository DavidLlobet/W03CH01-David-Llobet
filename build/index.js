function createCard() {
  const newCard = document.createElement("p");
  newCard.classList.add("character");
  newCard.innerHTML = "hola";
  const p = document.getElementsByTagName("body");
  p.appendChild(newCard);
}
