// mine

function solution(n) {
  let answer = 0;

  while (n > 0) {
    answer += n % 10; // 마지막 자릿수를 더함
    n = Math.floor(n / 10); // 마지막 자릿수를 제거
  }

  return answer;
}

// best

function solution(n) {
  // 쉬운방법
  return (n + "").split("").reduce((acc, curr) => acc + parseInt(curr), 0);
}
