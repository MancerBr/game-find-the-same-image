export class Router {
  #routes = [];
  #history = [];

  constructor(routes, initialUrl) {
    if (Router._instance) {
      return Router._instance;
    }

    Router._instance = this;
    this.#init(routes, initialUrl);
  }

  static getInstance() {
    return this._instance;
  }

  navigate(url) {
    const historyRoute = this.#history[this.#history.length - 1];
    const route = this.#routes.find(route => route.path.includes(url));

    if (historyRoute?.instance) {
      historyRoute.instance.destroy();
    }

    if (!route) {
      return;
    }

    route.instance = new route.component();
    route.instance.init();
    this.#history.push(route);
  }

  navigateBack() {
    const historyRoute = this.#history.pop();
    if (historyRoute?.instance) {
      historyRoute.instance.destroy();
    }

    const route = this.#history.pop();

    if (route) {
      this.navigate(route.path);
    }
  }

  #init(routes, initialUrl) {
    this.#routes = routes;
    this.navigate(initialUrl);
  }
}
