import { atom } from "recoil";
import { Trigger } from "../../constants/battle/trigger";
import { Skill, SkillEffect } from "./skills";

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

/**
 * 戦闘画面でのプレイヤーステータス
 *  - 戦闘開始時にプロフィール画面でのステータスを元に、IDの紐付けなどが行われる
 */
export type PlayerBattleState = {
  hp: number;
  maxHp: number;
  mp: number;
  maxMp: number;
  barrier: number;
  physicalAttack: number;
  magicalAttack: number;
  physicalDefense: number;
  magicalDefense: number;
  skills: Skill[];
  buff: BuffOrDebuff | null;
  debuff: BuffOrDebuff | null;
}

export const playerBattleState = atom<PlayerBattleState>({
  key: 'playerBattleState',
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
    skills: [],
    buff: null,
    debuff: null,
  },
})