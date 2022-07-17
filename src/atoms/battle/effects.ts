/**
 * @file 戦闘 - 副作用の発火
 */

import { atom, RecoilState } from 'recoil';

 export type BattleEffect = {
  key: string;
  effect: () => void | Promise<void>;
 }

export const battleEffectsOnTurnStart: RecoilState<Set<BattleEffect>> = atom({
  key: 'battleEffectsOnTurnStart',
  default: new Set(),
});

export const battleEffectsOnTurnEnd: RecoilState<Set<BattleEffect>> = atom({
  key: 'battleEffectsOnTurnEnd',
  default: new Set(),
});

export const battleEffectsOnAttack: RecoilState<Set<BattleEffect>> = atom({
  key: 'battleEffectsOnAttack',
  default: new Set(),
});

export const battleEffectsOnDefense: RecoilState<Set<BattleEffect>> = atom({
  key: 'battleEffectsOnDefense',
  default: new Set(),
});

export const battleEffectsOnDamaged: RecoilState<Set<BattleEffect>> = atom({
  key: 'battleEffectsOnDamaged',
  default: new Set(),
});