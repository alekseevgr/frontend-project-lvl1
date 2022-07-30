#!/usr/bin/env node
import {
    cons, car, cdr
  } from '@hexlet/pairs';
import _ from 'lodash';
import readlineSync from 'readline-sync';
import name from './brain-games.js'
const champion = `Congratulations, ${name}`;
const brainCalc = () => {
    for (let i = 0; i <= 3; i = i + 1){
        if ( i === 3) {
            return console.log(champion)
        }
const randomNumber = Math.round(Math.random() * 10);
const pair = cons(randomNumber, randomNumber);
const expressionSymbol = ['+', '-', '*'];
const symbol = _.sample(expressionSymbol)
console.log(`What is the result of the expression?.\nQuestion: ${car(pair)} ${symbol} ${cdr(pair)}`);
const answer = readlineSync.question('Your answer: ');
const correctAnswer = () => {
    let result = 0;
    if (symbol === '+'){
        result = car(pair) + cdr(pair);
    } else if (symbol === '-') {
        result = car(pair) - cdr(pair);
    } else if (symbol === '*') {
        result = car(pair) * cdr(pair);
    }
    return result;
};
const win = 'Correct!';
const lose = `'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${name}`;
if (answer === correctAnswer) {
    console.log(win);
} else {
    return console.log(lose);
};
};
};
brainCalc();