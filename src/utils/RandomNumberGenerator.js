function getRandomNumber(min, max) {
  // Generate a random floating-point number between 0 and 1
  const random = Math.random();

  // Calculate the random number within the specified range
  const randomNumber = Math.floor(random * (max - min + 1)) + min;

  return randomNumber;
}

export default getRandomNumber;
