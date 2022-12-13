import {createElement} from '../../../utils/createElement.js';
import {TAG} from '../../../constants/tag.constants.js';
import {ClassComponent} from '../../ClassComponent.js';

export class FlipCardInner extends ClassComponent {
  constructor() {
    super();
    this.#create();
  }

  rotateToFront() {
    this.addClass(['flipped']);
  }

  rotateToBack() {
    this.removeClass('flipped');
  }

  #create() {
    this.nativeElement = createElement(
      TAG.DIV,
      {
        class: ['flip-card-inner'],
      },
    );
  }
}
