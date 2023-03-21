import { atom } from "recoil";
import { CharacterState } from "./playerState";

export type EnemyState = CharacterState & {
  modeChangeThreshold?: number | undefined;
  modeChangeEnemyId?: number | undefined;
}

export const enemyState = atom<EnemyState>({
  key: 'enemyState',
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
