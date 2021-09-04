import runGame from './index.js';
import randomNumber from './randomNumber';

const questionGenerator = () => {
  const number = randomNumber(0, 100);
  const correctAnswer = number % 2 === 0 ? 'yes' : 'no';
  return { question: number, correctAnswer };
};

export default () => {
  runGame(questionGenerator);
};
