import { atom } from "recoil";
import { Trigger } from "../../constants/battle/trigger";
import { SkillEffect } from "./skills";

export type BuffOrDebuff = {
  id: number,
  name: string;
  description: string;
  type: 'buff' | 'debuff'; // いる？
  icon: string;
  trigger: Trigger;
  effect: SkillEffect;
  duration: number;
}

export type CharacterState = {
  hp: number;
  maxHp: number;
  mp: number;
  maxMp: number;
  barrier: number;
  physicalAttack: number;
  magicalAttack: number;
  physicalDefense: number;
  magicalDefense: number;
  buff: BuffOrDebuff | null;
  debuff: BuffOrDebuff | null;
}

export const playerState = atom<CharacterState>({
  key: 'playerState',
  default: {
    hp: 100,
    maxHp: 100,
    mp: 100,
    maxMp: 100,
    barrier: 0,
    physicalAttack: 10,
    magicalAttack: 10,
    physicalDefense: 10,
    magicalDefense: 10,
    buff: null,
    debuff: null,
  },
})
