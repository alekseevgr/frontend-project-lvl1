import readlineSync from 'readline-sync';
console.log('Welcome to the Brain Games!')
export const name = readlineSync.question('May I have you name?');
const startGame = () => {
console.log(`Hello, ${name}!`);
};

export default startGame;
