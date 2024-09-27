// my

function solution(n, k) {
  var answer = [];
  for (let i = 0; i < Math.floor(n / k); i++) {
    answer[i] = k * (i + 1);
  }
  return answer;
}

// another

function solution(n, k) {
  var answer = [];
  // i += k;
  for (let i = k; i <= n; i += k) {
    answer.push(i);
  }
  return answer;
}
