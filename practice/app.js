function solution(my_string, n) {
  let answer = "";
  for (let i = my_string.length - n; i < my_string.length; i++) {
    answer += my_string[i];
  }
  return answer;
}

// 예시 실행
console.log(solution("ProgrammerS123", 11));
console.log(solution("He110W0r1d", 5));
