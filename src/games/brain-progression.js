import getRandomNumber from '../getRandomNumber.js';

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

const generateRoundData = () => {
  const startNumber = getRandomNumber(minStartNumber, maxStartNumber);
  const step = getRandomNumber(minProgressionValue, maxProgressionValue);
  const progressionLength = getRandomNumber(minProgressionLength, maxProgressionLength);
  const hiddenIndex = getRandomNumber(0, progressionLength - 1);
  const progression = generateProgression(startNumber, step, progressionLength);
  const question = progression
    .map((number, index) => (index === hiddenIndex ? '..' : number.toString()))
    .join(' ');
  const correctAnswer = progression[hiddenIndex].toString();

  return { question, correctAnswer };
};

export default () => ({ generateRoundData, description });
