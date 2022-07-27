import readlineSync from 'readline-sync';

const name = readlineSync.question('May I have you name? ');
const startGame = () => {
return console.log(`Hello, ${name}!`)
};

export default startGame;
