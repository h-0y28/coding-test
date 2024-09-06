// my

function solution(my_string) {
  return my_string
    .split("") // 나누고
    .filter((a) => a >= 0 && a <= 9) // 거르고
    .map(Number) // 문자열 -> 숫자
    .sort((a, b) => a - b); // 정렬
  // 그럼 끝
}
