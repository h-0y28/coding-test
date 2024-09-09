function solution(my_string) {
  return my_string
    .split("")
    .filter((a) => a >= 0 && a <= 9)
    .map(Number);
}

// 예시 실행
console.log(solution("hi12392")); // 1
console.log(solution("p2o4i8gj2")); // 12
console.log(solution("abcde0")); // 12
