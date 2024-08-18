// 2022년 기준 선생님의 나이 age가 주어질 때, 선생님의 출생 연도를 return 하는 solution 함수를 완성해주세요
// 0 < age ≤ 120
// 나이는 태어난 연도에 1살이며 매년 1월 1일마다 1살씩 증가합니다.

// mine
function solution(age) {
  var answer = 0;
  if (0 < age <= 120) answer = 2023 - age;
  return answer;
}

// other's
function solution(age) {
  // getFullYear(): Date 객체의 메서드로, 현재 Date 객체가 나타내는 날짜와 시간에서 연도를 반환
  return new Date().getFullYear() - age + 1;
}
