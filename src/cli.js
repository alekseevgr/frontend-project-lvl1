import readlineSync from 'readline-sync';

const name = readlineSync.question('May I have you name? ');
const result = () => {
return console.log(`Hello, ${name}!`)
};

export default result;
