export class RootElement {
  static #rootElement;

  static createRootElement(root) {
    RootElement.#rootElement = root;
  }

  static mount(html) {
    RootElement.#rootElement.appendChild(html);
  }

  static unmount() {
    RootElement.#rootElement.replaceChildren();
  }

}
