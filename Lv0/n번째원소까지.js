// my
// for문 사용

function solution(num_list, n) {
  var answer = [];
  for (let i = 0; i < n; i++) answer[i] = num_list[i];
  return answer;
}

// another
// slice 사용

function solution(num_list, n) {
  return num_list.slice(0, n);
}
