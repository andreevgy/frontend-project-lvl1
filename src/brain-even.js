import readlineSync from 'readline-sync';

const min = 0;
const max = 100;

const askNumber = () => {
  const number = Math.floor(Math.random() * (max - min) + min);
  console.log(`Question: ${number}`);
  const correctAnswer = number % 2 === 0 ? 'yes' : 'no';
  const answer = readlineSync.question('Your answer: ');
  if (answer === correctAnswer) {
    console.log('Correct!');
    return true;
  }
  console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
  return false;
};

export default () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  for (let i = 0; i < 3; i += 1) {
    if (!askNumber()) {
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};
