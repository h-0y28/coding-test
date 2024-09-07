// my

function solution(numbers, n) {
  var answer = 0;
  let i = 0;
  while (1) {
    answer += numbers[i];
    i++;
    if (answer > n) break;
  }
  return answer;
}

// best

function solution(numbers, n) {
  return numbers.reduce((a, c) => (a <= n ? a + c : a));
}
