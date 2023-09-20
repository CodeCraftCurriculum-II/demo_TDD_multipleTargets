export function createRandomNumber(min, max) {
  return Math.round(Math.random() * (max - min)) + min;
}
