import { useState } from "react";
import { SetterOrUpdater, useRecoilState } from "recoil";
import { playerBattleState, enemyBattleState, PlayerBattleState, Skill } from "@/recoil/battle";
import { useSkill } from "./useSkill";
// import { useEnemyAI } from "./useEnemyAI";
// import { useItem, Item } from "./useItem";

type TurnPhase =
  | "start"
  | "enemyActionPreview"
  | "playerActionSelection"
  | "playerActionResolution"
  | "enemyActionResolution"
  | "end";

type Item = {
  name: string
}

export const useTurn = () => {
  const [turnPhase, setTurnPhase] = useState<TurnPhase>("start");
  const [player, setPlayer] = useRecoilState(playerBattleState);
  const [enemy, setEnemy] = useRecoilState(enemyBattleState);
  const { handleUseSkill } = useSkill();
  // TODO: implement
  // const { getEnemyAction } = useEnemyAI();
  // const { handleUseItem } = useItem();
  const getEnemyAction = () => {};
  const [enemyAction, setEnemyAction] = useState<Skill | null>(null);

  const reduceEffectDuration = (setCharacter: SetterOrUpdater<PlayerBattleState>) => {
    setCharacter((prevState) => {
      const updatedBuff = prevState.buff
        ? {
            ...prevState.buff,
            duration: prevState.buff.duration - 1,
          }
        : null;
      const updatedDebuff = prevState.debuff
        ? {
            ...prevState.debuff,
            duration: prevState.debuff.duration - 1,
          }
        : null;

      return {
        ...prevState,
        buff: updatedBuff && updatedBuff.duration > 0 ? updatedBuff : null,
        debuff: updatedDebuff && updatedDebuff.duration > 0 ? updatedDebuff : null,
      };
    });
  };

  const startTurn = () => {
    setTurnPhase("enemyActionPreview");
    reduceEffectDuration(setPlayer);
    reduceEffectDuration(setEnemy);
    const enemyActionPreview = getEnemyAction();
    // setEnemyAction(enemyActionPreview);
  };

  const playerSelectAction = (actionType: "skill" | "item" | "escape", action: Skill | Item | null) => {
    if (actionType === "skill") {
      handleUseSkill("player", action as Skill);
    } else if (actionType === "item") {
      // handleUseItem("player", action as Item);
    } else if (actionType === "escape") {
      // Handle escape logic here
    }
    setTurnPhase("playerActionResolution");
  };

  const resolveEnemyAction = () => {
    if (enemyAction) {
      handleUseSkill("enemy", enemyAction);
    }
    setTurnPhase("end");
  };

  const endTurn = () => {
    setTurnPhase("start");
    startTurn();
  };

  switch (turnPhase) {
    case "start":
      startTurn();
      break;
    case "enemyActionPreview":
      // Display enemy action to player
      break;
    case "playerActionSelection":
      // Wait for player input and call playerSelectAction()
      break;
    case "enemyActionResolution":
      resolveEnemyAction();
      break;
    case "end":
      endTurn();
      break;
    default:
      break;
  }
  
  return {
    turnPhase,
    playerSelectAction,
  };
};
