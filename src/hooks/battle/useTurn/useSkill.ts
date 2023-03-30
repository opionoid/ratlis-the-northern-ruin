import { SetterOrUpdater, useRecoilState, useRecoilValue } from "recoil";
import { PlayerBattleState, playerBattleState, enemyBattleState, CommandActor, Skill, SkillEffect } from "@/recoil/battle";
import { calcBarrier, calcSingleDamage } from "../utils";

/**
 * スキル使用
 * @parent useTurn
 */
export const useSkill = () => {
  const [player, setPlayer] = useRecoilState(playerBattleState);
  const [enemy, setEnemy] = useRecoilState(enemyBattleState);

  const handleUseSkill = (actor: CommandActor, skill: Skill) => {
    const updateCharacterState = (
      stateUpdater: SetterOrUpdater<PlayerBattleState>,
      stateUpdateFn: (prevState: PlayerBattleState) => PlayerBattleState
    ) => {
      stateUpdater((prevState) => {
        const newState = stateUpdateFn(prevState);
        return { ...prevState, ...newState };
      });
    };

    const applySkill: SkillEffect = (actorState, actorStateUpdater, targetState, targetStateUpdater) => {
      const stateUpdateFn = (prevState: PlayerBattleState) => {
        switch (skill.category) {
          case "damage":
            const damage = skill.repeat * calcSingleDamage(actorState, targetState, skill);
            return {
              ...prevState,
              hp: Math.max(prevState.hp - damage, 0),
            };
          case "heal":
            // 'Heal' for mp build, so it's not affected by attack status
            return {
              ...prevState,
              hp: Math.min(prevState.hp + skill.value, prevState.maxHp),
            };
          case "barrier":
            const barrier = skill.repeat * calcBarrier(actorState, skill);
            return {
              ...prevState,
              barrier: prevState.barrier + barrier,
            };
          case "support":
            return prevState;
          case "unique":
            // Handle unique effects
            return prevState;
          default:
            throw new Error(`Unknown action type ${skill.category}`);
        }
      };

      updateCharacterState(actorStateUpdater, (prevState) => {
        return { ...prevState, mp: Math.max(prevState.mp - skill.cost, 0) };
      });

      updateCharacterState(targetStateUpdater, stateUpdateFn);
      skill.effect(actorState, actorStateUpdater, targetState, targetStateUpdater);
    };

    switch (skill.target) {
      case "self":
        if (actor === "player") {
          applySkill(player, setPlayer, player, setPlayer);
        } else {
          applySkill(enemy, setEnemy, enemy, setEnemy);
        }
        break;
      case "another":
        if (actor === "player") {
          applySkill(player, setPlayer, enemy, setEnemy);
        } else {
          applySkill(enemy, setEnemy, player, setPlayer);
        }
        break;
      case "both":
        applySkill(player, setPlayer, enemy, setEnemy);
        applySkill(enemy, setEnemy, player, setPlayer);
        break;
      default:
        break;
    }
  };

  return { handleUseSkill };
};
