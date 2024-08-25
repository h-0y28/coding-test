// my

function solution(numbers) {
  var answer = [];
  for (let i = 0; i < numbers.length; i++) {
    answer[i] = numbers[i] * 2;
  }
  return answer;
}

// popular

function solution(numbers) {
  return numbers.reduce((a, b) => [...a, b * 2], []);
}

// best

function solution(numbers) {
  return numbers.map((b) => b * 2);
}

function solution(numbers) {
  return numbers.map((a) => a * 2);
}

function solution(numbers) {
  return numbers.reduce((a, b) => [...a, b * 2], []);
}
