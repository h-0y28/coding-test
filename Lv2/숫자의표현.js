// another

function solution(n) {
  let count = 0;
  let k = 1;

  // k가 증가하면서 가능한 모든 값을 체크
  while ((k * (k - 1)) / 2 < n) {
    // (n - (k * (k - 1) / 2))가 k로 나누어 떨어지는지 확인
    if ((n - (k * (k - 1)) / 2) % k === 0) {
      count++;
    }
    k++;
  }

  return count;
}
