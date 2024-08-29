// my

function solution(arr) {
  var answer = [...arr];
  if (answer.length === 1) return [-1];
  answer = answer.sort((a, b) => a - b);
  const min = answer[0];
  answer = arr.filter((num) => num !== min);
  return answer;
}

// best

function solution(arr) {
  const min = Math.min(...arr);
  return arr.length !== 1 ? arr.filter((i) => i !== min) : [-1];
}

// 안보고 best code 작성해보기

function solution(arr) {
  const min = Math.min(...arr);
  return arr.length !== 1 ? arr.filter((a) => a !== min) : [-1];
}
