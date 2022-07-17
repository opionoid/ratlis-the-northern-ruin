/**
 * [UNFIXED]
 *  - スキルIDを登録するだけ？
 *  - スキルをActiveにするのはスキル管理画面の操作なので、ここではActivateされたスキルのidかindexを指定するだけが綺麗？
 */

import { atom } from "recoil";

// TODO: RecoilState<Set<string>> の形かこの形かどちらかに統一
export const Skills = atom<Set<string>>({
  key: 'battleSkills',
  default: new Set()
})