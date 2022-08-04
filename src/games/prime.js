import _ from 'lodash';
import startGame from '../index.js';

const primeGame = () => {
  const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  const round = () => {
    const randomNumber = _.random(10);
    const question = randomNumber;
    const correctAnswer = () => {
      if (randomNumber < 2) {
        return 'no';
      } if (randomNumber === 2 || randomNumber === 3) {
        return 'yes';
      }
      for (let i = 2; i < randomNumber; i += 1) {
        if (randomNumber % i === 0) {
          return 'no';
        }
      }
      return 'yes';
    };
    return [question, correctAnswer()];
  };
  startGame(round, rules);
};

export default primeGame;
