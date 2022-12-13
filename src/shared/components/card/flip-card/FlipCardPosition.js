import {createElement} from '../../../utils/createElement.js';
import {TAG} from '../../../constants/tag.constants.js';
import {ClassComponent} from '../../ClassComponent.js';

export const CSS_CLASS_FRONT = 'flip-card-front';
export const CSS_CLASS_BACK = 'flip-card-back';

export class FlipCardPosition extends ClassComponent {
  constructor(cssClassPosition) {
    super();
    this.#create(cssClassPosition);
  }

  #create(cssClassPosition) {
    this.nativeElement = createElement(
      TAG.DIV,
      {
        class: [cssClassPosition],
      },
    );
  }
}
