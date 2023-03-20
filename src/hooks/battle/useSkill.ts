import { useSetRecoilState } from "recoil"
import { characterState, enemyHp, pcHp, pcMana } from "../../recoil/battle"

export type Skill = {
    id: number
    name: string
    description: string
    additionalEffectDescription: string
    damage: number
    barrier: number
    type: string
    cost: number
    src: string
    diceThreshold: number
    onUse: () => void
    additionalEffect: () => void;
}

export const useSkill = () => {
    const setCharacterState = useSetRecoilState(characterState)
    const handleUseSkill = (skill: Card) => {
        switch (skill.type) {
            case 'damage':
              // Perform damage calculation and apply to the enemy
              break;
            case 'heal':
              setCharacterState((prevState) => ({
                ...prevState,
                hp: prevState.hp + skill.value,
              }));
              break;
            case 'block':
              // Apply a blocking effect to the character
              break;
            case 'buff':
              // Apply a buff effect to the character
              break;
            case 'debuff':
              // Apply a debuff effect to the enemy
              break;
            case 'unique':
              // Handle unique effects
              break;
            default:
              console.log('Unknown action type');
          }
    }
    return { handleUseSkill }
}