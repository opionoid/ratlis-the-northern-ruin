/**
 * @file 戦闘 - 祝福
 */
 import { atom, RecoilState } from 'recoil';

export type Blessing = any;

 export const blessing: RecoilState<Blessing[]> = atom({
  key: 'blessing',
  default: [] as Blessing[],
});
