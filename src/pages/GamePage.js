import {Card} from '../shared/components/card/Card.js';
import {Cell} from '../shared/components/cell/Cell.js';
import {GameBoard as GameBoardView} from '../shared/components/game-board/GameBoard.js';
import {Game as GameModel} from '../shared/models/Game.js';
import {RootElement} from '../core/RootElement.js';
import {PageComponent} from '../core/PageComponent.js';
import {PRESET_TYPE} from '../shared/constants/presets/image-preset.constants.js';
import {GameConfiguration as GameConfigurationModel} from '../shared/models/GameConfiguration.js';
import {GameBoard as GameBoardModel} from '../shared/models/GameBoard.js';

export class GamePage extends PageComponent {
  #gameBoardView;
  #gameModel;
  #gameBoardElements = [];
  #gameBoardModel;

  constructor() {
    super();
    // TODO: get this config from configuration page when it's implemented.
    const gameConfigurationModel = new GameConfigurationModel();
    gameConfigurationModel.gridSize = 4;
    gameConfigurationModel.presetCardIconIndex = 7;
    gameConfigurationModel.presetType = PRESET_TYPE.GRENADE;
    this.#gameBoardView = new GameBoardView(gameConfigurationModel.gridSize);
    this.#gameBoardModel = new GameBoardModel();

    this.#gameModel = new GameModel(gameConfigurationModel);
  }

  init() {
    this.#createBoard();
    this.#addListeners();
  }

  destroy() {
    this.#removeListeners();
    RootElement.unmount();
  }

  #createBoard() {
    const documentFragment = document.createDocumentFragment();
    const presetCards = this.#gameModel.generatePresetCards();

    for (const card of presetCards) {
      const {flipCard, flipCardInner} = Card.create(
        card.id,
        card.hashId,
        card.frontImageSrc,
        card.backImageSrc,
      );
      const cellView = new Cell();
      this.#gameBoardModel.setElement({
        cardModel: card,
        flipCardInnerView: flipCardInner,
      });
      cellView.appendChild(flipCard);
      documentFragment.appendChild(cellView.nativeElement);
    }

    this.#gameBoardView.appendChild({nativeElement: documentFragment});

    RootElement.mount(this.#gameBoardView.nativeElement)
  }

  #addListeners() {
    this.#gameBoardView.addClickEvent((props) => {
      if (!props) {
        return;
      }
      this.#gameBoardModel.updateElementsOnBoard(props);
    });
  }

  #removeListeners() {
    this.#gameBoardView.removeClickEvents();
  }
}
