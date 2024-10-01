// my

function solution(order) {
  return order
    .toString()
    .split("")
    .filter((digit) => ["3", "6", "9"].includes(digit)).length; // 3, 6, 9가 포함된 자리만 필터링
}
