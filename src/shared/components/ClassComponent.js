export class ClassComponent {
  #nativeElement;

  constructor() {
  }

  get nativeElement() {
    return this.#nativeElement;
  }

  set nativeElement(htmlElement) {
    this.#nativeElement = htmlElement;
  }

  appendChild(classComponent) {
    this.#nativeElement.appendChild(classComponent.nativeElement);
  }

  addClass(className) {
    this.#nativeElement.classList.add(className);
  }

  removeClass(className) {
    this.#nativeElement.classList.remove(className);
  }

  setAttribute(name, value) {
    this.#nativeElement.setAttribute(name, value);
  }

  removeAttribute(attrName) {
    this.#nativeElement.removeAttribute(attrName);
  }

  addEventListener(eventType, callback, options) {
    this.#nativeElement.addEventListener(eventType, callback, options);
  }

  removeEventListener(eventType, callback, options) {
    this.#nativeElement.removeEventListener(eventType, callback, options);
  }

  remove() {
    this.#nativeElement.remove();
  }
}
