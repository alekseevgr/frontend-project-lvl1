import readlineSync from 'readline-sync';
const roundsCount = 3;
const startGame = (round, rules) => {
    console.log('Welcome to the Brain Games!')  
    const name = readlineSync.question('May I have your name?');

    console.log(`Hello, ${name}!`);
    console.log(rules);

    const endgame = `Congratulations, ${name}!`;
    const win = 'Correct!';

    for (let i = 0; i <= roundsCount; i = i + 1) {
        if (i === roundsCount) {
            return console.log(endgame)
        };
        const [question, correctAnswer] = round();
        console.log(`Question: ${question}`)

        const answer = readlineSync.question('Your answer: ');
        const lose = `'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${name}!`;

        if (answer !== correctAnswer) {
            console.log(lose)
            return;
        }
        console.log(win);
    };
};

export default startGame;