function solution(n) {
  var answer = [];
  for (let i = 1; i <= n; i++) {
    if (n % i == 0) {
      answer.push(i);
    }
  }
  return answer;
}

// 예시 실행
console.log(solution(24)); // 0
console.log(solution(29)); // 2
