import { SetterOrUpdater } from "recoil"
import { CharacterState } from "./playerState"

export type CommandActor = 'player' | 'enemy' // FIXME: ここじゃない気がする（スキルではなくコマンドに紐づくので）
export type SkillTarget = 'self' | 'another' | 'both'
export type SkillCategory = 'damage' | 'heal' | 'barrier' | 'support' | 'unique'

/**
 * SkillAttribute: ダメージのスケールが物理か魔法か。無はDoTなど攻撃力を参照しない。
 */
export type SkillAttribute = 'physical' | 'magical' | 'none'

/**
 * SkillSubAttribute: 物理／魔法／無とは別に付与される属性で、存在すれば相手の耐性によってダメージに倍率がかかる。
 */
export type SkillSubAttribute = 'fire' | 'none'

export type SkillEffect = (
  actorState: CharacterState,
  setActorState: SetterOrUpdater<CharacterState>,
  targetState: CharacterState,
  setTargetState: SetterOrUpdater<CharacterState>,
) => void

export type Skill = {
  id: number
  name: string
  description: string
  target: SkillTarget
  category: SkillCategory
  attribute: SkillAttribute
  subAttribute: SkillSubAttribute
  value: number
  repeat: number
  cost: number
  src: string
  effect: SkillEffect
}
