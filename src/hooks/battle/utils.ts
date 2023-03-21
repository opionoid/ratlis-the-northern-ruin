import { CharacterState, Skill } from "../../recoil/battle";

export const calcSingleDamage = (attacker: CharacterState, defender: CharacterState, skill: Skill) => {
  const attack = skill.attribute === "physical" ? attacker.physicalAttack : attacker.magicalAttack;
  const defense = skill.attribute === "physical" ? defender.physicalDefense : defender.magicalDefense;
  const damage = skill.value * attack * (1 - defense / (defense + 100));
  return Math.ceil(damage);
}

export const calcBarrier = (actor: CharacterState, skill: Skill) => {
  const barrier = skill.value * actor.magicalAttack / (actor.magicalAttack + 100);
  return Math.ceil(barrier);
}
