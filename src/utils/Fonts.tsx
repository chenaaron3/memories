import opentype from 'opentype.js';
import { FONT_TYPES } from '~/types';

const LOADED_FONTS: Record<string, opentype.Font> = {}

export const loadFont = async (name: FONT_TYPES) => {
    let loadedFont = undefined
    const font = FONTS[name];

    if (LOADED_FONTS[name]) {
        loadedFont = LOADED_FONTS[name]
    } else {
        loadedFont = await fetch(font.family)
            .then((res) => res.arrayBuffer())
            .then((buffer) => {
                return opentype.parse(buffer);
            })
        LOADED_FONTS[name] = loadedFont;
    }
    return {
        "font": loadedFont,
        "offset": font.offset
    };
}

interface FontDetails {
    family: string;
    offset: number;
}

export const FONTS = {
    'Montserrat': {
        family: '/fonts/montserrat.ttf',
        offset: .25
    },
} as const satisfies Record<string, FontDetails>;