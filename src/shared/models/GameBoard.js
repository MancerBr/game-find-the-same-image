export class GameBoard {
  #elements = [];

  constructor() {
  }

  setElement(element) {
    this.#elements.push(element);
  }

  updateElementsOnBoard(props) {

    const maxVisible = 2;
    const cards = this.#getDuplicateCardsByHash(props.hash);
    const isSameCard = this.#showCard(cards, props);

    if (isSameCard) {
      return;
    }

    const countVisible = this.#countVisibleCards(cards);
    this.#updateFinishedState(cards, countVisible, maxVisible);
    const visibleCards = this.#getAllVisibleCards();

    if (visibleCards.length >= maxVisible) {
      visibleCards.forEach(el => {
        el.cardModel.showBackPosition();
      });
      this.#rotateCardsToBack(visibleCards);
    }
  }

  #getDuplicateCardsByHash(hash) {
    return this.#elements.filter(el => {
      return el.cardModel.hashId === hash;
    });
  }

  #countVisibleCards(cards) {
    return cards.reduce((accumulator, currentValue) => {
      return currentValue.cardModel.isShowFrontPosition ? accumulator + 1 : accumulator;
    }, 0);
  }

  #updateFinishedState(cards, countVisible, naxVisible) {
    cards.forEach((el) => {
      el.cardModel.isFinished = countVisible === naxVisible;
    });
  }

  #getAllVisibleCards() {
    return this.#elements.filter(el => {
      return !el.cardModel.isFinished && el.cardModel.isShowFrontPosition;
    });
  }

  #rotateCardsToBack(cards) {
    setTimeout(() => {
      cards.forEach(el => {
        el.flipCardInnerView.rotateToBack();
      });
    }, 500)
  }

  #showCard(cards, props) {
    let isSameCard = false;
    cards.forEach(el => {
      if (el.cardModel.id === props.id) {
        isSameCard = el.cardModel.isShowFrontPosition;
        el.flipCardInnerView.rotateToFront();
        el.cardModel.showFrontPosition();
      }
    });
    return isSameCard;
  }
}
