import getRandomInt from '../getRandomInt.js';
import startGame from '../index.js';

const rules = 'What number is missing in the progression?';
const generateProgression = (num, step, numberCount) => {
  const array = [];
  let j = 1;
  let progressionElement = num;
  while (j <= numberCount) {
    array.push(progressionElement);
    progressionElement += step;
    j += 1;
  }
  return array;
};
const generateRound = () => {
  const num = getRandomInt(0, 100);
  const step = getRandomInt(1, 5);
  const numberCount = getRandomInt(5, 10);
  const progression = generateProgression(num, step, numberCount);
  const hiddenNumberIndex = getRandomInt(0, numberCount);
  progression[hiddenNumberIndex] = '..';
  const correctAnswer = String(num + hiddenNumberIndex * step);
  const question = progression.join(' ');
  return [question, correctAnswer];
};
const runProgGame = () => startGame(generateRound, rules);

export default runProgGame;
