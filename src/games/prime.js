import getRandomInt from '../getRandomInt.js';
import startGame from '../index.js';

const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const prime = (num) => {
  if (num < 2) {
    return false;
  }
  let result = true;
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) {
      result = false;
    }
  }
  return result;
};
const generateRound = () => {
  const num = getRandomInt(0, 10);
  const question = num;
  const correctAnswer = prime(num) ? 'yes' : 'no';
  return [question, correctAnswer];
};
const runPrimeGame = () => startGame(generateRound, rules);

export default runPrimeGame;
