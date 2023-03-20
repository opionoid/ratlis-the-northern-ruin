import { atom } from "recoil";
import { Effect } from "./characterState";

export type EnemyState = {
  hp: number;
  mp: number;
  physicalAttack: number;
  magicalAttack: number;
  physicalDefense: number;
  magicalDefense: number;
  effects: Effect[];
  modeChangeThreshold?: number | undefined;
  modeChangeEnemyId?: number | undefined;
}

export const enemyState = atom<EnemyState>({
  key: 'enemyState',
  default: {
    hp: 100,
    mp: 100,
    physicalAttack: 10,
    magicalAttack: 10,
    physicalDefense: 10,
    magicalDefense: 10,
    effects: [],
  },
})
