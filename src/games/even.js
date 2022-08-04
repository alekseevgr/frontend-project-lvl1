import _ from 'lodash';
import startGame from '../index.js';

const evenGame = () => {
  const rules = 'Answer "yes" if the number is even, otherwise answer "no"';
  const round = () => {
    const randomNumber = _.random(100);
    const isEven = randomNumber % 2 === 0 ? 'yes' : 'no';
    const question = randomNumber;
    const correctAnswer = isEven;

    return [question, correctAnswer];
  };
  startGame(round, rules);
};

export default evenGame;
