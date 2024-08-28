// my

function solution(angle) {
  var answer = 0;
  answer = angle < 90 ? 1 : (angle = 90 ? 2 : angle < 180 ? 3 : 4);
  return answer;
}

// another

function solution(angle) {
  return [0, 90, 91, 180].filter((x) => angle >= x).length;
}
