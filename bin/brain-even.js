import readlineSync from 'readline-sync';
import { name } from '../src/cli.js';
const randomNumber = Math.round(Math.random() * 100);
console.log(`Answer "yes" if the number is even, otherwise answer "no".\nQuestion: ${randomNumber}`);
const answer = readlineSync.question('Your answer: ');
const correctAnswer = String(randomNumber % 2 === 0 ? 'yes' : 'no');
const win = 'Correct!';
const lose = `'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${name}`;
const champion = `Congratulations, ${name}`;
const even = () => {
    if (answer === correctAnswer) {
        console.log(win);
    }
    else {
        console.log(lose)
        return
    }
  };
// answer === correctAnswer ? win : lose;
export default even