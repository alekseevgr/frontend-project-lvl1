import startGame from '../index.js';
import getRandomInt from '../functionrandom.js';

const evenGame = () => {
  const rules = 'Answer "yes" if the number is even, otherwise answer "no"';
  const round = () => {
    const randomNumber = getRandomInt(0, 100);
    const isEven = randomNumber % 2 === 0 ? 'yes' : 'no';
    const question = randomNumber;
    const correctAnswer = isEven;

    return [question, correctAnswer];
  };
  startGame(round, rules);
};

export default evenGame;
