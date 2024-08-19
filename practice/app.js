function solution(n) {
  var answer = 0;

  for (let i = 1; i < n; i * 10) answer += n % i;
  console.log(answer);
}

solution(123);
