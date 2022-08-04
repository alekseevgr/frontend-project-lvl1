import _ from 'lodash';
import startGame from '../index.js'
const progGame = () => {
    const rules = `What number is missing in the progression?`;
    const round = () => {
        const numberCount = _.random(5, 10);
        let randomNumber = _.random(100);
        const step = _.random(1, 5);
            let i = 1
            let result = [];
            while (i <= numberCount) {
                result.push(randomNumber)
                randomNumber = randomNumber + step;
                i = i + 1;
            };
            result[_.random(numberCount)] = '..';
            const correctAnswer = () => {
                let correct;
                for (let i = 0; i < result.length; i += 1) {
                    if (i === 0 && (result[i] === '..')) {
                        correct = String(result[i + 1] - step)
                    }   else if (result[i] === '..') {
                        correct = String(result[i - 1] + step);
                    }
                };
            return correct;
            };
            const question = result;
            return [question, correctAnswer()];
    };
startGame(round, rules);
};

export default progGame
