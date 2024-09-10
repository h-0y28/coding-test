// my

function solution(s) {
  var answer = "";
  var numbers = s.split(" ").map(Number);
  answer += Math.min(...numbers);
  answer += " ";
  answer += Math.max(...numbers);
  return answer;
}

// another

function solution(s) {
  const arr = s.split(" ");
  return Math.min(...arr) + " " + Math.max(...arr);
}
