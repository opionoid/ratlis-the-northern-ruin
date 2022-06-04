/**
 * @file 戦闘 - 副作用の発火
 */

import { atom, RecoilState } from 'recoil';

 export type BattleEffectHandler = () => void; // TODO: MouseEffectHandlerとかのほうがいい？

export const battleEffectsOnTurnStart: RecoilState<BattleEffectHandler[]> = atom({
  key: 'battleEffectsOnTurnStart',
  default: [] as BattleEffectHandler[],
});

export const battleEffectsOnTurnEnd: RecoilState<BattleEffectHandler[]> = atom({
  key: 'battleEffectsOnTurnEnd',
  default: [] as BattleEffectHandler[],
});

export const battleEffectsOnAttack: RecoilState<BattleEffectHandler[]> = atom({
  key: 'battleEffectsOnAttack',
  default: [] as BattleEffectHandler[],
});

export const battleEffectsOnDefense: RecoilState<BattleEffectHandler[]> = atom({
  key: 'battleEffectsOnDefense',
  default: [] as BattleEffectHandler[],
});

export const battleEffectsOnDamaged: RecoilState<BattleEffectHandler[]> = atom({
  key: 'battleEffectsOnDamaged',
  default: [] as BattleEffectHandler[],
});