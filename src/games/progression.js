import getRandomInt from '../functionrandom.js';
import startGame from '../index.js';

const rules = 'What number is missing in the progression?';

const progression = (result, step) => {
  let correct;
  for (let i = 0; i < result.length; i += 1) {
    if (i === 0 && (result[i] === '..')) {
      correct = String(result[i + 1] - step);
    } else if (result[i] === '..') {
      correct = String(result[i - 1] + step);
    }
  }
  return correct;
};
const round = () => {
  const numberCount = getRandomInt(5, 10);
  let randomNumber = getRandomInt(0, 100);
  const step = getRandomInt(1, 5);
  const result = [];
  let j = 1;
  while (j <= numberCount) {
    result.push(randomNumber);
    randomNumber += step;
    j += 1;
  }
  result[getRandomInt(0, numberCount)] = '..';
  const correctAnswer = progression(result, step);
  const question = result.join(' ');
  return [question, correctAnswer];
};
const progGame = () => startGame(round, rules);

export default progGame;
