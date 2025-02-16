import { FONTS } from '~/utils/Fonts';

export type FONT_TYPES = keyof typeof FONTS;

export interface PostcardData {
  font: string;
}
