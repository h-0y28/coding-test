function solution(s) {
  var answer = s.split("");
  if (s.length % 2 === 0) {
    // 짝수일 때, 중간 두 글자 반환
    return answer[s.length / 2 - 1] + answer[s.length / 2];
  } else {
    // 홀수일 때, 중간 인덱스는 소수점 버림
    return answer[Math.floor(s.length / 2)];
  }
}

// 예시 실행
console.log(solution("abcde"));
console.log(solution("qwer"));
