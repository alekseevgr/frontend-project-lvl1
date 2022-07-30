#!/usr/bin/env node
import readlineSync from 'readline-sync';
import name from './brain-games.js'
const champion = `Congratulations, ${name}`;
const brainEven = () => {
    for (let i = 0; i <= 3; i = i + 1){
        if ( i === 3) {
            return console.log(champion)
        }
const randomNumber = Math.round(Math.random() * 100);
console.log(`Answer "yes" if the number is even, otherwise answer "no".\nQuestion: ${randomNumber}`);
const answer = readlineSync.question('Your answer: ');
const correctAnswer = String(randomNumber % 2 === 0 ? 'yes' : 'no');
const win = 'Correct!';
const lose = `'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${name}`;
if (answer === correctAnswer) {
    console.log(win);
} else {
    return console.log(lose);
};
};
};
brainEven();