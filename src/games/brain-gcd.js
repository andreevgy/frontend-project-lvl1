import randomNumber from '../randomNumber.js';

const description = 'Find the greatest common divisor of given numbers.';

const getCorrectAnswer = (a, b) => {
  let smaller = a < b ? a : b;
  let bigger = smaller === a ? b : a;
  let left = bigger % smaller;
  while (left !== 0) {
    bigger = smaller;
    smaller = left;
    left = bigger % smaller;
  }
  return smaller;
};

const questionGenerator = () => {
  const number1 = randomNumber(0, 100);
  const number2 = randomNumber(0, 100);
  const question = `${number1} ${number2}`;
  const correctAnswer = getCorrectAnswer(number1, number2).toString();

  return { question, correctAnswer };
};

export default () => ({ questionGenerator, description });
