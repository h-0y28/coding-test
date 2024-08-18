// num1, num2가 같으면 1 다르면 -1 return

// 내 코드
function solution(num1, num2) {
  // var answer = 0;
  if (num1 === num2) return 1;
  else return -1;
  // return answer;
}

// 더 나은 코드
function solution(num1, num2) {
  var answer = 0;
  answer = num1 === num2 ? 1 : -1;
  return answer;
}
