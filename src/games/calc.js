import getRandomInt from '../getRandomInt.js';
import startGame from '../index.js';

const rules = 'What is the result of the expression?.';
const expressionSymbols = ['+', '-', '*'];

const calculate = (num1, symbol, num2) => {
  switch (symbol) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    default:
      return num1 * num2;
  }
};
const generateRound = () => {
  const num1 = getRandomInt(0, 100);
  const num2 = getRandomInt(0, 100);
  const symbol = expressionSymbols[getRandomInt(0, (expressionSymbols.length))];

  const question = `${num1} ${symbol} ${num2}`;
  const correctAnswer = String(calculate(num1, symbol, num2));
  return [question, correctAnswer];
};
const runCalcGame = () => startGame(generateRound, rules);

export default runCalcGame;
