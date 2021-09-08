import randomNumber from '../randomNumber.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const questionGenerator = () => {
  const number = randomNumber(0, 100);
  const correctAnswer = number % 2 === 0 ? 'yes' : 'no';
  return { question: number, correctAnswer };
};

export default () => ({ description, questionGenerator });
