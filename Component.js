class Component {
  parentElement;
  element;

  constructor(parentElement, className, htmlTag = "li") {
    this.element = document.createElement(htmlTag);
    this.parentElement = parentElement;
    this.element.className = className;
    this.parentElement.append(this.element);
  }
}

export default Component;
