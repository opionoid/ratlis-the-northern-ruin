import { atom } from "recoil";
import { PlayerBattleState } from "./playerState";

export type EnemyState = PlayerBattleState & {
  modeChangeThreshold?: number | undefined;
  modeChangeEnemyId?: string | undefined;
}

export const enemyBattleState = atom<EnemyState>({
  key: 'enemyBattleState',
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
