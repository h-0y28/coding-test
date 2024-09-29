// my

function solution(a, b) {
  return a.toString() + b.toString() > b.toString() + a.toString()
    ? Number(a.toString() + b.toString())
    : Number(b.toString() + a.toString());
}

// another
// 백터 이용
// math.max() 이용

function solution(a, b) {
  return Math.max(Number(`${a}${b}`), Number(`${b}${a}`));
}
