import _ from 'lodash';
import startGame from '../index.js';

const gcdGame = () => {
    const rules = 'Find the greatest common divisor of given numbers.';

    const round = () => {
        const randomNumber = _.random(100);
        const secondRandomNumber = _.random(100);
        const question = `Question: ${randomNumber} ${secondRandomNumber}`;

        const correctAnswer = () => {
           let c;
           let a = randomNumber;
           let b = secondRandomNumber;
           while (a !== b) {
            if (a > b){
                a = a - b;
            } else if (a < b) {
                c = a;
                a = b;
                b = c;
            }
           };
        return String(a);
        };

        return [question, correctAnswer()];
    };


    startGame(round, rules)
};

export default gcdGame