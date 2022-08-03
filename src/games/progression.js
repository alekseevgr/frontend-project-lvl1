import _ from 'lodash';
import startGame from '../index.js'
const progGame = () => {
    const rules = `What number is missing in the progression?`;
    const round = () => {
        const numberCount = _.random(5, 10);
        let randomNumber = _.random(100);
        const step = _.random(5);
            let i = 1
            let result = [];
            while (i <= numberCount) {
                result.push(randomNumber)
                randomNumber = randomNumber + step;
                i = i + 1;
            }
            const correctAnswer = result[_.random(numberCount)];
            result[_.random(numberCount)] = '..';
            const question = result;
            return [question, correctAnswer];
    };
startGame(round, rules);
};

export default progGame
