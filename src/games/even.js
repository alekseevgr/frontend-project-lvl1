import startGame from '../index.js';
import getRandomInt from '../functionrandom.js';

const rules = 'Answer "yes" if the number is even, otherwise answer "no"';
const even = (num) => num % 2 === 0;
const round = () => {
  const randomNumber = getRandomInt(0, 100);
  const isEven = even(randomNumber) ? 'yes' : 'no';
  const question = randomNumber;
  const correctAnswer = isEven;

  return [question, correctAnswer];
};

const evenGame = () => startGame(round, rules);

export default evenGame;
