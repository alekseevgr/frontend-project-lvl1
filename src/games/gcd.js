import getRandomInt from '../getRandomInt.js';
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
  return a;
};
const generateRound = () => {
  const num1 = getRandomInt(0, 100);
  const num2 = getRandomInt(0, 100);
  const question = `${num1} ${num2}`;
  const correctAnswer = String(gcd(num1, num2));

  return [question, correctAnswer];
};
const runGcdGame = () => startGame(generateRound, rules);

export default runGcdGame;
