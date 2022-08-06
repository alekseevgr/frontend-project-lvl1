import getRandomInt from '../functionrandom.js';
import startGame from '../index.js';

const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const prime = (num) => {
  switch (num) {
    case 0:
    case 1:
      return 'no';
    case 2:
    case 3:
      return 'yes';
    default:
      for (let i = 2; i < num; i += 1) {
        if (num % i === 0) {
          return 'no';
        }
      }
  }
  return 'yes';
};
const round = () => {
  const randomNumber = getRandomInt(0, 10);
  const question = randomNumber;
  const correctAnswer = prime(randomNumber);
  return [question, correctAnswer];
};
const primeGame = () => startGame(round, rules);

export default primeGame;
