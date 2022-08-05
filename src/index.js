import readlineSync from 'readline-sync';

const roundsCount = 3;
const startGame = (round, rules) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name?');

  console.log(`Hello, ${name}!`);
  console.log(rules);

  for (let i = 0; i < roundsCount; i += 1) {
    const [question, correctAnswer] = round();
    console.log(`Question: ${question}`);

    const answer = readlineSync.question('Your answer: ');

    if (answer !== correctAnswer) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${name}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${name}!`);
};

export default startGame;
