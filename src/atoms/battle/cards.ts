/**
 * @file 戦闘 - 場の札
 */

 import { MouseEventHandler } from 'react';
import { atom, RecoilState } from 'recoil';

// TODO: 定数ファイルに書き出す
export type SkillCategory = {

}

export type Skill = {
  id: string;
  name: string; // `${id}_name`
  icon: string;
  description: string; // `${id}_description`
  type: string;
  cost: number;
  attack: number;
  defense: number;
  category: SkillCategory[];
  effect: MouseEventHandler<HTMLButtonElement>; // hooksが入りそう
}

export const hands: RecoilState<Skill[]> = atom({
  key: 'hands',
  default: new Array(),
});
// 山札 - スキルのID配列
export const deck: RecoilState<string[]> = atom({
  key: 'deck',
  default: new Array(),
});

export const discardPile: RecoilState<Skill[]> = atom({
  key: 'discardPile',
  default: new Array(),
});

export const reservedPile: RecoilState<Skill[]> = atom({
  key: 'reservedPile',
  default: new Array(),
});
