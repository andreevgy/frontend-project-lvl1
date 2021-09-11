import getRandomNumber from '../getRandomNumber.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const generateRoundData = () => {
  const number = getRandomNumber(0, 100);
  const correctAnswer = number % 2 === 0 ? 'yes' : 'no';
  return { question: number.toString(), correctAnswer };
};

export default () => ({ description, generateRoundData });
