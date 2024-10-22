function solution(numbers) {
  var answer = [];
  for (let i = 0; i < numbers.length - 1; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      answer.push(numbers[i] + numbers[j]);
    }
  }
  return [...new Set(answer)].sort((a, b) => a - b);
}

// 예시 실행
console.log(solution([2, 1, 3, 4, 1])); // [2, 3, 4, 5, 6, 7]
console.log(solution([5, 0, 2, 7])); // [2, 5, 7, 9, 12]
