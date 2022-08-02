import _ from 'lodash';
import startGame from '../index.js'
const randomNumber =  Math.floor(Math.random() * 100);
const rules = `Answer "yes" if the number is even, otherwise answer "no"`;
const isEven = randomNumber % 2 === 0 ? 'yes' : 'no';
const round = () => {
    const question = randomNumber;
    const correctAnswer = isEven;

    return [question, correctAnswer];
}

export default () => startGame(round, rules);


