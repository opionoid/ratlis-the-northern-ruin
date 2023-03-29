import { CharacterState, Skill } from "../../recoil/battle";

export const calcSingleDamage = (attacker: CharacterState, defender: CharacterState, skill: Skill) => {
  const attack = skill.attribute === "physical" ? attacker.physicalAttack : attacker.magicalAttack;
  const defense = skill.attribute === "physical" ? defender.physicalDefense : defender.magicalDefense;
  const damage = skill.value * attack * (1 - defense / (defense + 100));
  return Math.ceil(damage);
}

export const calcBarrier = (actor: CharacterState, skill: Skill) => {
  const attack = skill.attribute === "physical" ? actor.physicalAttack : actor.magicalAttack;
  const barrier = skill.value * attack / (attack + 100);
  return Math.ceil(barrier);
}
