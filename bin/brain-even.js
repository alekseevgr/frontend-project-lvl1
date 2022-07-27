import readlineSync from 'readline-sync';
import { name } from '../src/cli.js';
const randomNumber = Math.round(Math.random() * 100);
console.log(`Answer "yes" if the number is even, otherwise answer "no".\nQuestion: ${randomNumber}`);
const answer = readlineSync.question('Your answer: ');
const numberIsEven = (randomNumber) => {
    return randomNumber % 2 === 0 ? 'yes' : 'no';
};
const even = (answer, numberIsEven) => {
    if (answer !== numberIsEven) {
        console.log(`'${answer}' is wrong answer ;(. Correct answer was '${numberIsEven}'.\nLet's try again, ${name}`)
    } 
    ;
};

export default even