import getRandomInt from '../functionrandom.js';
import startGame from '../index.js';

const calcGame = () => {
  const rules = 'What is the result of the expression?.';
  const round = () => {
    const randomNumber = getRandomInt(0, 100);
    const secondRandomNumber = getRandomInt(0, 100);
    const expressionSymbol = ['+', '-', '*'];
    const symbol = expressionSymbol[getRandomInt(0, (expressionSymbol.length))];

    const question = `${randomNumber} ${symbol} ${secondRandomNumber}`;
    const pair = [randomNumber, secondRandomNumber];

    const correctAnswer = () => {
      switch (symbol) {
        case '+':
          return String(pair[0] + pair[1]);
        case '-':
          return String(pair[0] - pair[1]);
        default:
          return String(pair[0] * pair[1]);
      }
    };
    return [question, correctAnswer()];
  };

  startGame(round, rules);
};

export default calcGame;
