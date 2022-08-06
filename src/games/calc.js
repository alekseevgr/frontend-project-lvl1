import getRandomInt from '../functionrandom.js';
import startGame from '../index.js';
// константа с правилами,
//функция с главной логикой,
//генератор раундов,
//функция запуска игры, по сути просто передача генератора раундов и правил в основную логику, 
// она уже есть сейчас, просто из нее лучше вынести правила и генератор раундов в корень файла.
const calcGame = () => {
  const rules = 'What is the result of the expression?.';
  const expressionSymbol = ['+', '-', '*'];
  
  const round = () => {
    const randomNumber = getRandomInt(0, 100);
    const secondRandomNumber = getRandomInt(0, 100);
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
