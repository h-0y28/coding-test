function solution(n, k) {
  var answer = [];
  for (let i = 0; i < Math.floor(n / k); i++) {
    answer[i] = k * (i + 1);
  }
  return answer;
}

// 예시 실행
console.log(solution(10, 3)); // [3, 6, 9]
console.log(solution(15, 5)); // [5, 10, 15]
