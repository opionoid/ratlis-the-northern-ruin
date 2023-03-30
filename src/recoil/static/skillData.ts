import { atom } from "recoil";
import { Skill } from "../battle";

export type SkillStaticData = Omit<Skill, 'effect'> & {
  effectId: string;
} 

export const skillsStaticDataState = atom<SkillStaticData[]>({
  key: "skillsStaticData",
  default: [],
});
