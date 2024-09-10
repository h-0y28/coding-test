// my

function solution(n, k) {
  const service = Math.floor(n / 10);
  return n * 12000 + (k - service) * 2000;
}

//another
// 틸트 ✨✨✨
// Math.flor = ~~

function solution(n, k) {
  k -= ~~(n / 10);
  if (k < 0) k = 0;
  return n * 12000 + k * 2000;
}
