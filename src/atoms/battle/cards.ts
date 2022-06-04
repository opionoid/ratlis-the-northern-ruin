/**
 * @file 戦闘 - 場の札
 */

 import { MouseEventHandler } from 'react';
import { atom, RecoilState } from 'recoil';

 export type Skill = {
    id: string;
    name: string; // `${id}_name`
    icon: string;
    description: string; // `${id}_description`
    type: string;
    cost: number;
    attack: number;
    defense: number;
    effect: MouseEventHandler<HTMLButtonElement>; // hooksが入りそう
  }

 

export const hands: RecoilState<Skill[]> = atom({
  key: 'hands',
  default: [] as Skill[],
});
// 山札 - スキルのID配列
export const deck: RecoilState<string[]> = atom({
  key: 'deck',
  default: [] as string[],
});

export const discardPile: RecoilState<Skill[]> = atom({
  key: 'discardPile',
  default: [] as Skill[],
});

export const reservedPile: RecoilState<Skill[]> = atom({
  key: 'reservedPile',
  default: [] as Skill[],
});
