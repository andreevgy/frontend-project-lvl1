import readlineSync from 'readline-sync';

export default (questionGenerator) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  for (let i = 0; i < 3; i += 1) {
    const gameData = questionGenerator();
    console.log(`Question: ${gameData.question}`);
    const answer = readlineSync.question('Your answer: ');
    if (answer !== gameData.correctAnswer) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${gameData.correctAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${name}!`);
};
