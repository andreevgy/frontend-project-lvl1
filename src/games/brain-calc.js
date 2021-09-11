import getRandomNumber from '../getRandomNumber.js';

const description = 'What is the result of the expression?';

const actions = ['+', '-', '*'];

const getCorrectAnswer = (a, b, action) => {
  switch (action) {
    case '*':
      return a * b;
    case '+':
      return a + b;
    case '-':
      return a - b;
    default:
      return null;
  }
};

const generateRoundData = () => {
  const number1 = getRandomNumber(0, 100);
  const number2 = getRandomNumber(0, 100);
  const action = actions[getRandomNumber(0, actions.length - 1)];
  const question = `${number1} ${action} ${number2}`;
  const correctAnswer = getCorrectAnswer(number1, number2, action).toString();

  return { question, correctAnswer };
};

export default () => ({ description, generateRoundData });
