import { atom } from "recoil";
import { Skill } from "../battle";

export type StaticSkillData = Omit<Skill, 'effect'> & {
  effectId: string;
} 

export const skillsStaticDataState = atom<StaticSkillData[]>({
  key: "skillsStaticData",
  default: [],
});
