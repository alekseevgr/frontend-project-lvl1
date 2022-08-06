import getRandomInt from '../functionrandom.js';
import startGame from '../index.js';

const rules = 'What is the result of the expression?.';
const expressionSymbol = ['+', '-', '*'];

const expression = (num1, symbol, num2) => {
  switch (symbol) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    default:
      return num1 * num2;
  }
};
const round = () => {
  const randomNumber = getRandomInt(0, 100);
  const secondRandomNumber = getRandomInt(0, 100);
  const symbol = expressionSymbol[getRandomInt(0, (expressionSymbol.length))];

  const question = `${randomNumber} ${symbol} ${secondRandomNumber}`;
  const correctAnswer = String(expression(randomNumber, symbol, secondRandomNumber));
  return [question, correctAnswer];
};
const calcGame = () => startGame(round, rules);

export default calcGame;
