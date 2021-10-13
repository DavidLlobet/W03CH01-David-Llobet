import Component from "./Component.js";

class Page {
  mainDiv;
  communicationsDiv;
  lista;
  personajes;

  constructor(personajes) {
    this.personajes = personajes;
    this.createMainDiv();
    this.createList();
    this.createCommunicationsDiv();
  }

  createMainDiv() {
    this.mainDiv = document.createElement("div");
    this.mainDiv.className = "app container";
    document.body.append(this.mainDiv);
  }

  createList() {
    this.lista = document.createElement("ul");
    this.lista.className = "characters-list row list-unstyled";
    this.mainDiv.append(this.lista);
  }

  createCommunicationsDiv() {
    this.communicationsDiv = document.createElement("div");
    this.communicationsDiv.className = "comunications";
    document.body.append(this.communicationsDiv);
  }
}

export default Page;
