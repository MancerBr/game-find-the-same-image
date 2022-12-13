import {UUID} from '../utils/uuid.js';

export class Card {
  #id = UUID();
  #hashId;
  #frontImageSrc;
  #backImageSrc;

  #isShowFrontPosition = false;
  #isFinished = false;

  constructor(frontImageSrc, backImageSrc) {
    this.#frontImageSrc = frontImageSrc;
    this.#backImageSrc = backImageSrc;
  }

  get id() {
    return this.#id;
  }

  get hashId() {
    return this.#hashId;
  }

  set hashId(hash) {
    this.#hashId = hash;
  }

  get frontImageSrc() {
    return this.#frontImageSrc;
  }

  get backImageSrc() {
    return this.#backImageSrc;
  }

  get isShowFrontPosition() {
    return this.#isShowFrontPosition;
  }

  get isFinished() {
    return this.#isFinished;
  }

  set isFinished(value) {
    this.#isFinished = value;
  }

  showFrontPosition() {
    this.#isShowFrontPosition = true;
  }

  showBackPosition() {
    this.#isShowFrontPosition = false;
  }
}
