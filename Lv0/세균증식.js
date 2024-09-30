// my

function solution(n, t) {
  var answer = n;
  for (let i = 0; i < t; i++) {
    answer *= 2;
  }
  return answer;
}

// another

function solution(n, t) {
  return n << t;
}
