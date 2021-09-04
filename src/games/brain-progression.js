import randomNumber from '../randomNumber.js';

const description = 'What number is missing in the progression?';

const minStartNumber = -100;
const maxStartNumber = 100;

const minProgressionValue = 1;
const maxProgressionValue = 10;

const minProgressionLength = 5;
const maxProgressionLength = 10;

export default () => {
  const startNumber = randomNumber(minStartNumber, maxStartNumber);
  const progressionValue = randomNumber(minProgressionValue, maxProgressionValue);
  const arrayLength = randomNumber(minProgressionLength, maxProgressionLength);
  const hiddenIndex = randomNumber(0, arrayLength - 1);
  const array = [startNumber];
  let question = '';
  for (let i = 1; i <= arrayLength; i += 1) {
    const number = array[i - 1] + progressionValue;
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
