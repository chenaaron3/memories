import { FONTS } from '~/utils/Fonts';

export type FONT_TYPES = keyof typeof FONTS;

export interface PolaroidData {
  src: string;
  caption: string;
}

export interface PostcardData {
  font: FONT_TYPES;
  name: string;
  music: string;
  letter: string;
  polaroids: PolaroidData[];
  story: string[];
}
