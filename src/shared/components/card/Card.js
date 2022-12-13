import {
  CSS_CLASS_BACK,
  CSS_CLASS_FRONT,
  FlipCard,
  FlipCardInner,
  FlipCardPosition
} from './flip-card/index.js';
import {Image} from '../image/Image.js';

export class Card {
  static attrIdName = 'data-card-id';
  static attrHashIdName = 'data-card-hash';

  static create(id, hashId, frontImageSrc, backImageSrc) {
    const flipCard = new FlipCard();
    const flipCardInner = new FlipCardInner();
    const flipCardPositionFront = new FlipCardPosition(CSS_CLASS_FRONT);
    const flipCardPositionBack = new FlipCardPosition(CSS_CLASS_BACK);
    const imageFront = new Image(frontImageSrc);
    const imageBack = new Image(backImageSrc);

    flipCardPositionBack.appendChild(imageBack);
    flipCardPositionFront.appendChild(imageFront);

    flipCardInner.appendChild(flipCardPositionBack);
    flipCardInner.appendChild(flipCardPositionFront);

    flipCard.appendChild(flipCardInner);

    flipCard.setAttribute(Card.attrIdName, id);
    flipCard.setAttribute(Card.attrHashIdName, hashId);
    return {
      flipCard,
      flipCardInner,
    };
  }
}
