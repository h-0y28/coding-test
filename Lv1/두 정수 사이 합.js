// my
function solution(a, b) {
  var answer = 0;
  if (a < b) {
    for (; a <= b; a++) answer += a;
  } else {
    for (; b <= a; b++) answer += b;
  }
  return answer;
}
//best
function adder(a, b) {
  var result = 0;
  //함수를 완성하세요
  return ((a + b) * (Math.abs(a - b) + 1)) / 2;
}
