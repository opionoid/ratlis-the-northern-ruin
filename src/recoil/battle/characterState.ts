import { atom, SetterOrUpdater } from "recoil";
import { Trigger } from "../../constants/battle/trigger";

export type Effect = {
  id: number,
  name: string;
  description: string;
  type: 'buff' | 'debuff';
  icon: string;
  trigger: Trigger;
  effect: (character: CharacterState, setCharacter: SetterOrUpdater<CharacterState>) => void,
  duration: number;
}

export type CharacterState = {
  hp: number;
  mp: number;
  physicalAttack: number;
  magicalAttack: number;
  physicalDefense: number;
  magicalDefense: number;
  effects: Effect[];
}

export const characterState = atom<CharacterState>({
  key: 'characterState',
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
