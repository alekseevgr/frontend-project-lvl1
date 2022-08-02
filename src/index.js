import readlineSync from 'readline-sync';
const roundsCount = 3;
const startGame = (round, rules) => {
    console.log('Welcome to the Brain Games!')  
    const name = readlineSync.question('May I have you name?');

    console.log(`Hello, ${name}!`);
    console.log(rules);

    const endgame = `Congratulations, ${name}`;
    const win = 'Correct!';
    const [question, correctAnswer] = round();

    for (let i = 0; i <= roundsCount; i = i + 1) {
        if (i === roundsCount) {
            return console.log(endgame)
        };
        console.log(`Question: ${question}`)
        const answer = readlineSync.question('Your answer: ');
        const lose = `'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${name}`;

        if (answer !== correctAnswer) {
            console.log(lose)
            return
        }
        console.log(win);
    };
};

export default startGame;