function addDefinedIntegers(numbers: (number | undefined)[]) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i]) {
      sum += numbers[i]!;
    }
  }
  return sum;
}

export default addDefinedIntegers;
