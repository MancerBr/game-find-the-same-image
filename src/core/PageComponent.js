export class PageComponent {
  constructor() {
    if (new.target === PageComponent) {
      throw new TypeError('Cannot construct Abstract instances directly');
    }
  }

  init() {
    throw new Error(`Method "init()" must be implemented.`);
  }

  destroy() {
    throw new Error(`Method "init()" must be implemented.`);
  }
}
