// my

function solution(hp) {
  var answer = 0;
  let H = hp;

  // 5로 나누는 부분
  answer += Math.floor(H / 5);
  H = H % 5; // H를 5로 나눈 나머지로 업데이트

  // 3으로 나누는 부분
  answer += Math.floor(H / 3);
  H = H % 3; // H를 3으로 나눈 나머지로 업데이트

  // 나머지 1로 나누는 부분
  answer += H; // 나머지는 모두 1로 처리

  return answer;
}

// another

function solution(hp) {
  return Math.floor(hp / 5) + Math.floor((hp % 5) / 3) + ((hp % 5) % 3);
}
