import { SetterOrUpdater, useRecoilState } from "recoil"
import { CharacterState, playerState, enemyState, CommandActor, Skill, SkillEffect } from "../../recoil/battle"

export const useSkill = () => {
    const [player, setPlayer] = useRecoilState(playerState);
    const [enemy, setEnemy] = useRecoilState(enemyState);
  
    const handleUseSkill = (actor: CommandActor, skill: Skill) => {
      const updateCharacterState = (
        stateUpdater: SetterOrUpdater<CharacterState>,
        stateUpdateFn: (prevState: CharacterState) => CharacterState
      ) => {
        stateUpdater((prevState) => {
          const newState = stateUpdateFn(prevState);
          return { ...prevState, ...newState };
        });
      };
  
      const applySkill: SkillEffect = (
        actorState,
        actorStateUpdater,
        targetState,
        targetStateUpdater
      ) => {
        const stateUpdateFn = (prevState: CharacterState) => {
          switch (skill.type) {
            case "damage":
              return {
                ...prevState,
                hp: Math.max(prevState.hp - skill.value, 0),
              };
              case 'heal':
                return {
                  ...prevState,
                  hp: Math.min(prevState.hp + skill.value, prevState.maxHp),
                };
              case 'barrier':
                return {
                  ...prevState,
                  barrier: prevState.barrier + skill.value,
                  };
              case 'support':
                return prevState
              case 'unique':
                // Handle unique effects
                return prevState
            default:
              throw new Error(`Unknown action type ${skill.type}`);
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