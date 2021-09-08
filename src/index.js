import readlineSync from 'readline-sync';

const numberOfRounds = 3;

export default (gameInit) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  const game = gameInit();
  console.log(game.description);
  for (let i = 0; i < numberOfRounds; i += 1) {
    const roundData = game.questionGenerator();
    console.log(`Question: ${roundData.question}`);
    const answer = readlineSync.question('Your answer: ');
    if (answer !== roundData.correctAnswer) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${roundData.correctAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${name}!`);
};
