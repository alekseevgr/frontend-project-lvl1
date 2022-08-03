import { car, cdr, cons } from '@hexlet/pairs';
import _ from 'lodash';
import startGame from '../index.js';

const calcGame = () => {
    const rules = 'What is the result of the expression?.';
    
    const round = () => {
        const randomNumber = _.random(20);
        const secondRandomNumber = _.random(20);
        const expressionSymbol = ['+', '-', '*'];
        const symbol = expressionSymbol[_.random(expressionSymbol.length -1)]
        
        const question = `Question: ${randomNumber} ${symbol} ${secondRandomNumber}`
        const pair = cons(randomNumber, secondRandomNumber);

            const correctAnswer = () => {
                switch (symbol) {
                    case '+':
                    return String(car(pair) + cdr(pair));
                    case '-':
                    return String(car(pair) - cdr(pair));
                    default:
                    return String(car(pair) * cdr(pair));
                };
            }; 
        return [question, correctAnswer()]
    };

startGame(round, rules);
}

export default calcGame