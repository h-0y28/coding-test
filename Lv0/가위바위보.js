//my

function solution(rsp) {
  var answer = "";
  let i = 0;
  while (i < rsp.length) {
    answer += rsp[i] === "2" ? "0" : rsp[i] === "0" ? "5" : "2";
    i++;
  }
  return answer;
}

// best - 객체 사용법

function solution(rsp) {
  let arr = {
    2: 0,
    0: 5,
    5: 2,
  };
  var answer = [...rsp].map((v) => arr[v]).join("");
  return answer;
}
