import { atom } from "recoil";

export type PlayerStaticDataState = {
    hp: number;
    maxHp: number;
    mp: number;
    maxMp: number;
    physicalAttack: number;
    magicalAttack: number;
    physicalDefense: number;
    magicalDefense: number;
    activeSkillIdList: string[];
    passiveSkillIdList: string[];
    abilityIdList: string[];
  }

  export const playerStaticDataState = atom<PlayerStaticDataState>({
    key: 'playerStaticDataState',
    default: {
      hp: 100,
      maxHp: 100,
      mp: 100,
      maxMp: 100,
      physicalAttack: 10,
      magicalAttack: 10,
      physicalDefense: 10,
      magicalDefense: 10,
      activeSkillIdList: [],
      passiveSkillIdList: [],
      abilityIdList: [],
    },
  })