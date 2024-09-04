// my

function solution(numbers) {
  numbers.sort((a, b) => b - a);
  const num = numbers[0] * numbers[1];
  const num2 = numbers[numbers.length - 1] * numbers[numbers.length - 2];
  return num > num2 ? num : num2;
}

// best - 개천재임

function solution(numbers) {
  numbers.sort((a, b) => a - b);
  return Math.max(
    numbers[0] * numbers[1],
    numbers[numbers.length - 1] * numbers[numbers.length - 2]
  );
}
