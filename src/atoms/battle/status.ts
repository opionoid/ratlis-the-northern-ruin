/**
 * @file 戦闘 - 基礎ステータス
 */
 import { atom, RecoilState } from 'recoil';
 
 export const pcHp: RecoilState<number> = atom({
   key: 'pcHp',
   default: 0,
 });
 
 export const pcMaxHp: RecoilState<number> = atom({
   key: 'pcMaxHp',
   default: 0,
 });
 
 export const pcMana: RecoilState<number> = atom({
   key: 'pcMana',
   default: 0,
 });
 
 export const pcMaxMana: RecoilState<number> = atom({
   key: 'pcMaxMana',
   default: 0,
 });
 
 export const pcBuff: RecoilState<number> = atom({
   key: 'pcBuff',
   default: 0,
 });
 
 export const pcDebuff: RecoilState<number> = atom({
   key: 'pcDebuff',
   default: 0,
 });
 
 export const enemyHp: RecoilState<number> = atom({
   key: 'enemyHp',
   default: 0,
 });
 
 export const enemyMana: RecoilState<number> = atom({
   key: 'enemyMana',
   default: 0,
 });
 
 export const enemyBuff: RecoilState<number> = atom({
   key: 'enemyBuff',
   default: 0,
 });
 
 export const enemyDebuff: RecoilState<number> = atom({
   key: 'enemyDebuff',
   default: 0,
 });
 