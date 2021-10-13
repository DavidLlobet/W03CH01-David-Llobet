import { TestWatcher } from "@jest/core";
import Component from "./Component";

describe("Given a component class", () => {
  describe("When it receives a parent element, a class name and an html tag", () => {
    test("it should render a 'li' element with 'character' class", () => {
      // Arrange
      const parentElement = document.createElement("ul");
      const className = "character";

      // Act
      new Component(parentElement, className);
      const result = parentElement.querySelector("li.character");

      // Assert
      expect(result).not.toBeNull();
    });
  });
});
