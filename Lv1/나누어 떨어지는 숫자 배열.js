// my

function solution(arr, divisor) {
  var answer = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % divisor === 0) answer.push(arr[i]);
  }
  answer.sort();
  if (answer.length === 0) return -1;
  return answer;
}

// best

function solution(arr, divisor) {
  var answer = arr.filter((v) => v % divisor == 0);
  return answer.length == 0 ? [-1] : answer.sort((a, b) => a - b);
}
