import getRandomInt from '../functionrandom.js';
import startGame from '../index.js';

const rules = 'Find the greatest common divisor of given numbers.';
const gcd = (num1, num2) => {
  let c;
  let a = num1;
  let b = num2;
  while (a !== b) {
    if (a > b) {
      a -= b;
    } else if (a < b) {
      c = a;
      a = b;
      b = c;
    }
  }
  return String(a);
};
const round = () => {
  const randomNumber = getRandomInt(0, 100);
  const secondRandomNumber = getRandomInt(0, 100);
  const question = `${randomNumber} ${secondRandomNumber}`;
  const correctAnswer = String(gcd(randomNumber, secondRandomNumber));

  return [question, correctAnswer];
};
const gcdGame = () => startGame(round, rules);

export default gcdGame;
