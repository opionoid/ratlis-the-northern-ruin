import { atom } from "recoil";

export type EnemyStaticDataState = {
    id: string;
    maxHp: number;
    physicalAttack: number;
    magicalAttack: number;
    physicalDefense: number;
    magicalDefense: number;
    activeSkillIdList: string[];
    passiveSkillIdList: string[];
    modeChangeThreshold?: number | undefined;
    modeChangeEnemyId?: string | undefined;
}

export const enemiesStaticDataState = atom<EnemyStaticDataState[]>({
    key: 'enemiesStaticDataState',
    default: [],
});
