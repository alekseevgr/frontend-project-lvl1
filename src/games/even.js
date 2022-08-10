import startGame from '../index.js';
import getRandomInt from '../getRandomInt.js';

const rules = 'Answer "yes" if the number is even, otherwise answer "no"';
const isEven = (num) => num % 2 === 0;
const generateRound = () => {
  const num = getRandomInt(0, 100);
  const correctAnswer = isEven(num) ? 'yes' : 'no';
  const question = num;

  return [question, correctAnswer];
};

const runEvenGame = () => startGame(generateRound, rules);

export default runEvenGame;
