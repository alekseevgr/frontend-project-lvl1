import readlineSync from 'readline-sync';
import { name } from '../src/cli.js';
const randomNumber = Math.round(Math.random() * 100);
console.log(`Answer "yes" if the number is even, otherwise answer "no".\nQuestion: ${randomNumber}`);
const answer = readlineSync.question('Your answer: ');
let correctAnswer = '';
const numberIsEven = () => {
    return correctAnswer = randomNumber % 2 === 0 ? 'yes' : 'no';
};
const even = (answer, numberIsEven) => {
    if (answer !== numberIsEven) {
       return console.log('Correct!') 
    } 
    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${name}`);
   
};

export default even