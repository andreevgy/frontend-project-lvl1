import getRandomNumber from '../getRandomNumber.js';

const description = 'Find the greatest common divisor of given numbers.';

const getGCD = (a, b) => {
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

const generateRoundData = () => {
  const number1 = getRandomNumber(0, 100);
  const number2 = getRandomNumber(0, 100);
  const question = `${number1} ${number2}`;
  const correctAnswer = getGCD(number1, number2).toString();

  return { question, correctAnswer };
};

export default () => ({ generateRoundData, description });
