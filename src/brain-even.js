import randomNumber from './randomNumber.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

export default () => {
  const number = randomNumber(0, 100);
  const correctAnswer = number % 2 === 0 ? 'yes' : 'no';
  return { question: number, correctAnswer, description };
};
