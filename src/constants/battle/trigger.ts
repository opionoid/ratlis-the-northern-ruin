export const TRIGGER = {
    ON_TURN_START: 'on_turn_start',
    ON_TURN_END: 'on_turn_end',
    ON_ATTACK_RECEIVED: 'on_attack_received',
    ON_ATTACK: 'on_attack',
    ON_MANA_ABOVE: 'on_mana_above',
    ON_MANA_BELOW: 'on_mana_below',
    ON_HAND_ABOVE: 'on_hand_above',
    ON_HAND_BELOW: 'on_hand_below',
    AFTER_TURN_ELAPSED: 'after_turn_elapsed',
    ON_FIRST_CARD_PLAY: 'on_first_card_play',
}
export type Trigger = typeof TRIGGER[keyof typeof TRIGGER]