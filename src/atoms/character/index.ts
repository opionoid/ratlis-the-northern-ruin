/**
 * @file 旅画面から閲覧できるキャラクター情報
 */

export const CHARACTER_ORIGIN = {
  PROPHET: {
    name: 'prophet',
    icon: '',
    description: 'prophet_description',
  }
}

export type CharacterOrigin = typeof CHARACTER_ORIGIN[keyof typeof CHARACTER_ORIGIN];

export type Character = {
  name: string;
  origin: CharacterOrigin; // 出自
  deck: string[]; // スキルのID配列
  blessing: string[]; // 祝福のID配列
}