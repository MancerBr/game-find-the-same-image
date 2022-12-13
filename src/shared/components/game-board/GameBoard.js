import {createElement} from '../../utils/createElement.js';
import {TAG} from '../../constants/tag.constants.js';
import {ClassComponent} from '../ClassComponent.js';
import {EVENT_TYPE} from '../../constants/event-type.constant.js';
import {Card} from '../card/Card.js';

const CELL_SIZE = 20;
const CELL_GAP = 1;
const CSS_VAR_GRID_SIZE = '--grid-size';
const CSS_VAR_CELL_SIZE = '--cell-size';
const CSS_VAR_CELL_GAP = '--cell-gap';

export class GameBoard extends ClassComponent {
  #clickEvents = [];

  constructor(gridSize) {
    super();
    this.#createBoard(gridSize);
  }

  get #cellGap() {
    return CELL_GAP;
  }

  get #cellSize() {
    return CELL_SIZE;
  }

  addClickEvent(callback) {
    const clickEvent = (event) => {
      this.#emitClickEvent(event, callback);
    }

    this.addEventListener(EVENT_TYPE.CLICK, clickEvent);
    this.#clickEvents.push(clickEvent);
  }

  removeClickEvents() {
    if (!this.#clickEvents.length) {
      return;
    }

    this.#clickEvents.forEach(fn => {
      this.removeEventListener(EVENT_TYPE.CLICK, fn);
    });

    this.#clickEvents = [];
  }

  #emitClickEvent(event, callback) {
    const flipCard = event.path.find((el) => {
      const classList = [...el.classList];
      return el.classList && classList.includes('flip-card') || classList.includes('game-board');
    });

    if (!this.#isFlipCard(flipCard)) {
      callback(null);
      return;
    }
    callback({
      id: flipCard.getAttribute(Card.attrIdName),
      hash: flipCard.getAttribute(Card.attrHashIdName),
    });
  }

  #isFlipCard(flipCardInnerElement) {
    if (!flipCardInnerElement) {
      return false;
    }

    return [...flipCardInnerElement.classList].includes('flip-card');
  }

  #createBoard(gridSize) {
    this.nativeElement = createElement(
      TAG.DIV,
      {
        class: ['game-board'],
        setProperties: [
          {
            property: CSS_VAR_GRID_SIZE,
            value: gridSize,
          },
          {
            property: CSS_VAR_CELL_SIZE,
            value: `${this.#cellSize}vmin`,
          },
          {
            property: CSS_VAR_CELL_GAP,
            value: `${this.#cellGap}vmin`,
          },
        ],
      },
    );
  }
}
