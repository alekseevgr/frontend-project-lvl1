import readlineSync from 'readline-sync';
import name from '../src/cli.js';
const randomNumber = Math.round(Math.random() * 100);
const numberIsEven = () => {
    if(randomNumber % 2 === 0) {
    'yes';
    };
    'no';
};
console.log('Answer "yes" if the number is even, otherwise answer "no".')
console.log(`Question: ${randomNumber}`)
const answer = readlineSync.question('Your answer: ');
const even = () => {
    if (numberIsEven === answer){
        console.log('Correct!')
    };
    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${numberIsEven}'./nLet's try again,!`)
} 

export default even
