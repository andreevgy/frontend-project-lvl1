import runGame from './index.js';

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
      return 0;
  }
};

const questionGenerator = () => {
  const number1 = Math.floor(Math.random() * 100);
  const number2 = Math.floor(Math.random() * 100);
  const action = actions[Math.floor(Math.random() * 3)];
  const question = `${number1} ${action} ${number2}`;
  const correctAnswer = getCorrectAnswer(number1, number2, action).toString();

  return { question, correctAnswer };
};

export default () => {
  runGame(questionGenerator);
};
