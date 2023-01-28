# キャラクター

戦闘中のプレイヤー操作キャラクターについて。

## パラメーター

- **HP**：0になると戦闘が終了し、最後に訪れた祠へ戻される。
- **MP**：スキルに使用。0になってもデメリットはない。
- **星幽**：戦闘開始時は0。最大4。スキル使用時に、そのスキルに定められた量だけ増加する。4になると「星の呼びかけ」に応じられ、幽体化する。

## コマンド

### スキル

3つまで設定可能。MPを使用する。

|スキル例||
|:-|:-|
|霧の警句|相手に*脆弱*を付与。2回目以降の使用なら*脆弱*ではなく*蝕み*を付与。|
|祈雨と祝福|自身のデバフを解除し*再生*を付与。||

### アイテム

1つから、成長によって最大3つまで設定可能。MPは使用しないがアイテムは消費される。

|アイテム例||
|:-|:-|
|治療薬|*再生*を付与。|
|火炎瓶|威力50。たまに*燃焼*を付与。|
|星の欠片|MPを10回復。|

### 星の呼びかけ

星幽が4のとき使用可能。事前に設定した呼びかけの効果とともに幽体化する。

|呼びかけ例||
|:-|:-|
|黄金郷|星幽400、AoE。自身に「無敵」を付与。|
|はじまりの湖|相手のバフを消去。毎ターン開始時、自身のデバフを除去。|