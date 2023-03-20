/**
 * @file 大抵、副作用のトリガーに利用される戦闘の状況
 */

import { atom, RecoilState } from 'recoil';

// ターン経過
export const battleSituationTurnCount: RecoilState<number> = atom({
  key: 'battleSituationTurnCount',
  default: 0,
});
