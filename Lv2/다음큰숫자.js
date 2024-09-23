// my

// 2진수로 바꾸었을 때 1의 개수
function countOnes(num) {
  return num
    .toString(2)
    .split("")
    .filter((a) => a === "1").length;
}

function solution(n) {
  const numOnes = countOnes(n);
  let N = n + 1;
  while (countOnes(N) !== numOnes) {
    N++;
  }

  return N;
}

// another
// 정규식 사용

function solution(n, a = n + 1) {
  return n.toString(2).match(/1/g).length == a.toString(2).match(/1/g).length
    ? a
    : solution(n, a + 1);
}
