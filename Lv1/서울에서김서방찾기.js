// my
// for문 사용

function solution(seoul) {
  var answer = "";
  for (let i = 0; i < seoul.length; i++)
    if (seoul[i] === "Kim") return "김서방은 " + i + "에 있다";
  return answer;
}

// best
// indexOf 사용

function findKim(seoul) {
  var idx = seoul.indexOf("Kim");

  return "김서방은 " + idx + "에 있다";
}
