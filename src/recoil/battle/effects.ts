/**
 * @file 戦闘 - 副作用の発火
 * スキルやレリックによって副作用をスタックさせ前からトリガーさせていく。
 * 副作用の登録は
 *  - 祝福（ターン開始直前）
 *  - バフ・デバフ（ターン開始直前）
 *  - スキル（使用時）
 * によって行う。
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