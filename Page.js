
import Component from "./Component";
import Character from "./Character";
import personajes from "./juegoDeTronos";

class Page extends Component {
  personajes;

  constructor(parentElement, {personajes})
  super(parentElement, "character col");

  this.generateHTML();
}

generateHTML() {
  const html =
  this.parentElement.innerHTML = html;
}

export default Page;