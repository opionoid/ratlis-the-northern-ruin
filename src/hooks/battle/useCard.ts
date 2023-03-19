import { useSetRecoilState } from "recoil"
import { enemyHp, pcHp, pcMana } from "../../recoil/battle"

export type Card = {
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

export const useCard = () => {
    const setPcHp = useSetRecoilState(pcHp)
    const setPcMana = useSetRecoilState(pcMana)

    const setEnemyHp = useSetRecoilState(enemyHp)
    const handleUseCard = (card: Card) => {}
    return { handleUseCard }
}