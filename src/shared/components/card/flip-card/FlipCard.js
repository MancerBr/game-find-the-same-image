import {createElement} from '../../../utils/createElement.js';
import {TAG} from '../../../constants/tag.constants.js';
import {ClassComponent} from '../../ClassComponent.js';

export class FlipCard extends ClassComponent {
  constructor() {
    super();
    this.#create();
  }

  #create() {
    this.nativeElement = createElement(
      TAG.DIV,
      {
        class: ['flip-card'],
      },
    );
  }
}
