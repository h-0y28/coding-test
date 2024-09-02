// my

function solution(my_string) {
  let numbers = my_string.match(/\d+/g);
  let sum = numbers
    .join("") // 숫자 배열을 하나의 문자열로 결합
    .split("") // 문자열을 문자 배열로 나누기
    .map(Number) // 문자를 숫자로 변환
    .reduce((acc, num) => acc + num, 0); // 모든 숫자를 합산
  return sum;
}
