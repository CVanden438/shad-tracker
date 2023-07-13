function addIntegers(numbers: (number | undefined)[]) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    if (typeof numbers[i] === 'number' && !Number.isNaN(numbers[i])) {
      sum += numbers[i]!;
    }
  }
  return sum;
}

export default addIntegers;
