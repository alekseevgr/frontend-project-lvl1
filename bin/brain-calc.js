#!/usr/bin/env node
import { car, cdr, cons } from '@hexlet/pairs';
import _ from 'lodash';
import readlineSync from 'readline-sync';
import name from './brain-games.js'
const champion = `Congratulations, ${name}`;
const brainCalc = () => {
    for (let i = 0; i <= 3; i = i + 1){
        if ( i === 3) {
            return console.log(champion)
        }
const randomNumber = _.random(10);
const pair = cons(randomNumber, randomNumber);
const expressionSymbol = ['+', '-', '*'];
const symbol = expressionSymbol[_.random(expressionSymbol.length -1)]
console.log(`What is the result of the expression?.\nQuestion: ${randomNumber} ${symbol} ${randomNumber}`);
const answer = Number(readlineSync.question('Your answer: '));
const correctAnswer = () => {
    switch (symbol) {
        case '+':
            return car(pair) + cdr(pair);
        case '-':
            return car(pair) - cdr(pair);
        default:
            return car(pair) * cdr(pair);
    };
}; 
const win = 'Correct!';
const lose = `'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer()}'.\nLet's try again, ${name}`;
if (answer === correctAnswer()) {
    console.log(win);
} else {
    return console.log(lose);
};
};
};
brainCalc();