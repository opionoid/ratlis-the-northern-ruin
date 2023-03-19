import { useState, useEffect } from 'react';
import _ from 'lodash';

const Battle = () => {
  const [playerHealth, setPlayerHealth] = useState(100);
  const [enemyHealth, setEnemyHealth] = useState(100);
  const [deck, setDeck] = useState([]);
  const [hand, setHand] = useState([]);
  const [discardPile, setDiscardPile] = useState([]);

  const drawCard = () => {
    const newDeck = _.cloneDeep(deck);
    const newHand = _.cloneDeep(hand);
    const drawnCard = newDeck.shift();
    newHand.push(drawnCard);
    setDeck(newDeck);
    setHand(newHand);
  };

  const useCard = (cardIndex) => {
    const card = hand[cardIndex];
    card.onUse();
    const newHand = _.cloneDeep(hand);
    const newDiscardPile = _.cloneDeep(discardPile);
    newHand.splice(cardIndex, 1);
    newDiscardPile.push(card);
    setHand(newHand);
    setDiscardPile(newDiscardPile);
  };

  useEffect(() => {
    // 戦闘開始時の処理を実行します。
    // 山札をシャッフルし、3枚を手札に引きます。
    const initialDeck = [...Array(30).keys()];
    const shuffledDeck = _.shuffle(initialDeck);
    const initialHand = shuffledDeck.splice(0, 3);
    setDeck(shuffledDeck);
    setHand(initialHand);
  }, []);

  return (
    <div>
      <h1>Battle System</h1>
      <h2>Player Health: {playerHealth}</h2>
      <h2>Enemy Health: {enemyHealth}</h2>
      <div>
        {hand.map((card, index) => (
          <button key={index} onClick={() => useCard(index)}>
            Use Card {card}
          </button>
        ))}
      </div>
      <button onClick={drawCard}>Draw Card</button>
    </div>
  );
};

export default Battle;