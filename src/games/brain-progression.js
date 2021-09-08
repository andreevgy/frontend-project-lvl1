import randomNumber from '../randomNumber.js';

const description = 'What number is missing in the progression?';

const minStartNumber = -100;
const maxStartNumber = 100;

const minProgressionValue = 1;
const maxProgressionValue = 10;

const minProgressionLength = 5;
const maxProgressionLength = 10;

const generateProgression = (firstElement, step, length) => {
  const progression = [];
  for (let i = 0; i < length; i += 1) {
    progression[i] = firstElement + i * step;
  }
  return progression;
};

const questionGenerator = () => {
  const startNumber = randomNumber(minStartNumber, maxStartNumber);
  const step = randomNumber(minProgressionValue, maxProgressionValue);
  const progressionLength = randomNumber(minProgressionLength, maxProgressionLength);
  const hiddenIndex = randomNumber(0, progressionLength - 1);
  const progression = generateProgression(startNumber, step, progressionLength);
  let question = '';
  for (let i = 0; i < progressionLength; i += 1) {
    if (i === hiddenIndex) {
      question += '..';
    } else {
      question += progression[i].toString();
    }
    question += i === progressionLength ? '' : ' ';
  }
  const correctAnswer = progression[hiddenIndex].toString();

  return { question, correctAnswer };
};

export default () => ({ questionGenerator, description });
