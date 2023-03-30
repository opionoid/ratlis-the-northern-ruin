import { useState } from "react";
import { useRecoilState } from "recoil";
import { enemyBattleState, Skill } from "@/recoil/battle";

export const useEnemyAI = () => {
  const [enemy, setEnemy] = useRecoilState(enemyBattleState);

  // Assuming enemy has a list of skills
  const enemySkills: Skill[] = enemy.skills;

  const getRandomSkill = (): Skill => {
    const randomIndex = Math.floor(Math.random() * enemySkills.length);
    return enemySkills[randomIndex];
  };

  const getEnemyAction = (): Skill => {
    if (enemySkills.length === 0) {
      throw new Error("No enemy skills defined");
    }

    const selectedSkill = getRandomSkill();

    // You can add more complex AI logic here, such as selecting a skill based on enemy HP, player HP, or other factors

    return selectedSkill;
  };

  return { getEnemyAction };
};