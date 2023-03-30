import { enemyBattleState, playerBattleState } from "@/recoil/battle";
import { enemiesStaticDataState } from "@/recoil/static/enemiesData";
import { playerStaticDataState } from "@/recoil/static/playerData";
import { skillsStaticDataState } from "@/recoil/static/skillData";
import { selectorFamily, useRecoilValue, useSetRecoilState } from "recoil";

/**
 * セーブデータにあるような形式のデータを読み込んで戦闘シーン用に加工する
 */
export const useInitBattleState = () => {
  const playerStaticData = useRecoilValue(playerStaticDataState);
  const enemiesStaticData = useRecoilValue(enemiesStaticDataState);

  const skillsStaticData = useRecoilValue(skillsStaticDataState);

  const setPlayerBattleState = useSetRecoilState(playerBattleState);
  const setEnemyBattleState = useSetRecoilState(enemyBattleState);

  const initBattleState = () => {
    // playerの初期化
    setPlayerBattleState({
      ...playerStaticData,
      barrier: 0,
      buff: null,
      debuff: null,
      skills: playerStaticData.activeSkillIdList.map((id))
    });

    // enemyの初期化
  }

  return {
    initBattleState,
  };
}
