// first my code with error

function solution(s) {
  var answer = s.split("");
  if (s.length % 2 === 0) {
    return answer[s.length / 2 - 1] + answer[s.length / 2];
  } else {
    return answer[s.length / 2];
  }
}

//
