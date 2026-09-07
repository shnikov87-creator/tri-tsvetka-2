// src/game/data/seasons.js
// Описание четырёх сезонов гербария: наборы символов, палитры, русские названия.
// Каждый сезон — 6 видов растений + набор из 6 special-символов (snow/crocus/etc).
// Единый источник истины для SEASON_SYMS — все модули должны импортировать отсюда.

export const SEASONS = {
  summer: {
    syms: ['f-daisy', 'f-poppy', 'f-tulip', 'f-cornflower', 'f-sun', 'f-greens'],
    colors: ['#E8B33B', '#C2472E', '#DE7A84', '#5B6FB5', '#DCA43F', '#7E9270'],
    ru_gen: ['ромашек', 'маков', 'тюльпанов', 'васильков', 'подсолнухов', 'веточек зелени'],
    ru_sing: ['ромашки', 'маки', 'тюльпаны', 'васильки', 'подсолнухи', 'зелень'],
    ru_alm: ['ромашка', 'мак', 'тюльпан', 'василёк', 'подсол.', 'зелень'],
  },
  spring: {
    syms: ['s-snow', 's-crocus', 's-narc', 's-lily', 's-willow', 's-colts'],
    colors: ['#F6F9F0', '#A56CC7', '#E8A020', '#F6F9F2', '#5B74D8', '#E8A020'],
    ru_gen: ['подснежников', 'крокусов', 'нарциссов', 'ландышей', 'гиацинтов', 'одуванчиков'],
    ru_sing: ['подснежник', 'крокус', 'нарцисс', 'ландыш', 'гиацинт', 'одуванчик'],
    ru_alm: ['подснежник', 'крокус', 'нарцисс', 'ландыш', 'гиацинт', 'одуванчик'],
  },
  autumn: {
    syms: ['a-maple', 'a-oak', 'a-rowan', 'a-acorn', 'a-wheat', 'a-mush'],
    colors: ['#9B6FC7', '#A62646', '#E8873A', '#E8763A', '#D8D4C8', '#C23030'],
    ru_gen: ['астр', 'георгинов', 'физалиса', 'георгинов медных', 'лунника', 'морозника алого'],
    ru_sing: ['астра', 'георгин пурпурный', 'физалис', 'георгин медный', 'лунник', 'морозник алый'],
    ru_alm: ['астра', 'георгин п.', 'физалис', 'георгин м.', 'лунник', 'морозник а.'],
  },
  winter: {
    syms: ['w-cone', 'w-snow', 'w-spruce', 'w-rowan', 'w-holly', 'w-mist'],
    colors: ['#C8DBA8', '#F7F5EE', '#5B74D8', '#F2F0EA', '#6E2A55', '#C23030'],
    ru_gen: ['морозников светлых', 'зимних роз', 'анютиных глазок', 'снежноягодника', 'морозников тёмных', 'падуба'],
    ru_sing: ['морозник светлый', 'зимняя роза', 'анютины глазки', 'снежноягодник', 'морозник тёмный', 'падуб'],
    ru_alm: ['морозник св.', 'зимняя роза', 'анютины гл.', 'снежнояг.', 'морозник т.', 'падуб'],
  },
};

export const SEASON_NAMES = {
  summer: 'Летний',
  spring: 'Весенний',
  autumn: 'Осенний',
  winter: 'Зимний',
};

// Порядок автосмены сезонов в дневнике.
export const SEASON_ORDER = ['summer', 'autumn', 'winter', 'spring'];

// Короткий accessor для символа по (сезон, тип).
export function seasonSym(season, t) {
  if (t === WILD) return 'f-wild';
  if (t === BULB) return 'g-bulb';
  if (t === BF) return 'g-butterfly';
  return SEASONS[season].syms[t];
}

// Константы типов особых тайлов (отрицательные id).
export const N = 8;
export const TYPES = 6;
export const MAX_BLOOM = 60;
export const WILD = -1;
export const STONE = -2;
export const BULB = -3;
export const BF = -4;

export default SEASONS;
