// first my code with error

function solution(s) {
  var answer = s.split("");
  if (s.length % 2 === 0) {
    return answer[s.length / 2 - 1] + answer[s.length / 2];
  } else {
    return answer[s.length / 2];
  }
}

// fixed my code
// 홀수 일시 나누기 2를 하면 소숫점 발생 즉 오류 발생 따라서 소수점을 지워주는
// math.floor() 함수 사용

function solution(s) {
  var answer = s.split("");
  if (s.length % 2 === 0) {
    // join() 안 해도 됨
    return answer[s.length / 2 - 1] + answer[s.length / 2];
  } else {
    // 소숫점 버리기
    return answer[Math.floor(s.length / 2)];
  }
}
