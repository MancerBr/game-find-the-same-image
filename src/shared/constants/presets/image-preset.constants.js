import {GRENADE_PRESETS} from './grenade-presets.constant.js';
import {CARD_ICON_PRESETS} from './card-icon-presets.constant.js';

export const PRESET_TYPE = {
  CARD_ICON: 'CARD_ICON',
  GRENADE: 'GRENADE',
};

export const IMAGE_PRESET = {
  [PRESET_TYPE.CARD_ICON]: CARD_ICON_PRESETS,
  [PRESET_TYPE.GRENADE]: GRENADE_PRESETS,
};
