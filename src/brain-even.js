import runGame from './index.js';

const questionGenerator = () => {
  const number = Math.floor(Math.random() * 100);
  const correctAnswer = number % 2 === 0 ? 'yes' : 'no';
  return { question: number, correctAnswer };
};

export default () => {
  runGame(questionGenerator);
};
