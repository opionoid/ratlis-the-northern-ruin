import { SetterOrUpdater } from "recoil"
import { CharacterState } from "./playerState"

export type CommandActor = 'player' | 'enemy' // FIXME: ここじゃない気がする（スキルではなくコマンドに紐づくので）
export type SkillTarget = 'self' | 'another' | 'both'

export type SkillType = 'damage' | 'heal' | 'barrier' | 'support' | 'unique'

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
  additionalEffectDescription: string
  target: SkillTarget
  type: SkillType
  value: number
  cost: number
  src: string
  diceThreshold: number
  effect: SkillEffect
  additionalEffect: () => void;
}
