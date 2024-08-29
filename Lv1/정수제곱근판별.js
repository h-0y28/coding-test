// my

function solution(n) {
  n = Math.sqrt(n);
  if (n % 1 === 0) return (n + 1) * (n + 1);
  return -1;
}
