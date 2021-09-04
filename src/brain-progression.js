import runGame from './index.js';
import randomNumber from './randomNumber.js';

const description = 'What number is missing in the progression?';

const questionGenerator = () => {
  const startNumber = randomNumber(-100, 100);
  const progressionNumber = randomNumber(1, 10);
  const arrayLength = randomNumber(5, 10);
  const hiddenIndex = randomNumber(0, arrayLength - 1);
  const array = [startNumber];
  let question = '';
  for (let i = 1; i <= arrayLength; i += 1) {
    const number = array[i - 1] + progressionNumber;
    array.push(number);
  }
  for (let i = 0; i < array.length; i += 1) {
    if (i === hiddenIndex) {
      question += '..';
    } else {
      question += array[i].toString();
    }
    question += i === arrayLength ? '' : ' ';
  }
  const correctAnswer = array[hiddenIndex].toString();

  return { question, correctAnswer, description };
};

export default () => {
  runGame(questionGenerator);
};
