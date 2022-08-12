# Battle

```
updated at {docsify-updated}
```

turn & command battle

## Battle Phases

1. Starting Phase
1. Turn Cycle Phase
1. End Phase

### 1. Start Phase

The effects OF PLAYER are triggered before ones of Enemy.

1. Trigger battle-start effect (so should NOT despair enemy buff on this phase)

### 2. Turn Cycle

1. Regenerate hp and mana
1. Trigger turn-start effect
1. Show warning sign of enemy action
1. (Player) Selects Command to use skill
1. Trigger on-use effect
1. Trigger on-attack effect (if attacking)
1. Trigger enemy's on-attacked (if attacked)
1. Trigger enemy's on-blocked (if blocked at least 1 point)
1. Trigger enemy's on-damaged (if damaged at least 1 point)
1. (Enemy) Uses skill
1. Trigger effects (on-use, on-attack/ed, on-blocked, on-damaged)
1. Trigger turn-end effect
1. Delete all blocks

#### Effects Stacking

The effects are triggered in the following order.

1. Blessing (1 in 2)
1. Equipment
1. Skill

### 3. End phase

1. Trigger battle-end effect
1. Show rewards

#### Rewards

- [blessing](./blessing.md) (high powered but temporary enchantment)
- [soul](./currency.md) (temporary currency to get some bless or to be need in some events)
- [crystal](./currency.md) (permanent currency to grow character or to enchant map)
