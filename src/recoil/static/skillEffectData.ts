import { atom } from "recoil";

export type SkillEffectStaticData = {
    id: string;
    name: string;
    description?: string | undefined;
    // src 管理画面的なの作るならいるけど今はいいや
}

export const skillsStaticDataState = atom<SkillEffectStaticData[]>({
  key: "skillsStaticData",
  default: [],
});
