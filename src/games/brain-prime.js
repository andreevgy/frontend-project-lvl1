import randomNumber from '../randomNumber.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (number) => {
  if (number === 1) return false;
  for (let i = 2; i < number; i += 1) {
    if (number % i === 0) return false;
  }
  return true;
};

const questionGenerator = () => {
  const number = randomNumber(1, 100);
  const correctAnswer = isPrime(number) ? 'yes' : 'no';

  return { question: number, correctAnswer };
};

export default () => ({ questionGenerator, description });
