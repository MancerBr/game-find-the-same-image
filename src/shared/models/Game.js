import {IMAGE_PRESET, PRESET_TYPE} from '../constants/presets/image-preset.constants.js';
import {Card} from './Card.js';
import {getRandomElement} from '../utils/get-random-element.js';
import {shuffleArray} from '../utils/shuffleArray.js';
import {UUID} from '../utils/uuid.js';

export class Game {
  #imagePresets = IMAGE_PRESET;
  #gameConfiguration;

  constructor(gameConfiguration) {
    this.#gameConfiguration = gameConfiguration;
  }

  generatePresetCards() {
    const preset = this.#imagePresets[this.#gameConfiguration.presetType];
    const copyPreset = [...preset];
    const cards = [];
    const twoCards = 2;
    const maxElements = this.#gameConfiguration.gridSize * twoCards;
    for (let i = 0; i < maxElements; i++) {
      let src;

      if (copyPreset.length) {
        src = copyPreset.pop();
      } else {
        src = getRandomElement(preset);
      }

      const hash = UUID();

      const firstCard = new Card(
        src,
        this.#getCardIcon(),
      );

      const secondCard = new Card(
        src,
        this.#getCardIcon(),
      );

      firstCard.hashId = hash;
      secondCard.hashId = hash;

      cards.push(
        firstCard,
        secondCard,
      );
    }

    return shuffleArray(cards);
  }

  #getCardIcon() {
    return this.#imagePresets[PRESET_TYPE.CARD_ICON][this.#gameConfiguration.presetCardIconIndex];
  }
}
