import {createElement} from '../../utils/createElement.js';
import {TAG} from '../../constants/tag.constants.js';
import {ClassComponent} from '../ClassComponent.js';

export class Image extends ClassComponent {
  constructor(src) {
    super();
    this.#create(src);
  }

  #create(src) {
    this.nativeElement = createElement(
      TAG.DIV,
      {
        class: ['image'],
        attributes: [{
          name: 'style',
          value: `background-image: url(${src})`,
        }],
      },
    );
  }
}
