function solution(order) {
  return order
    .toString()
    .split("")
    .filter((a) => Number(a) % 3 === 0).length;
}

// 예시 실행
console.log(solution(200)); // 0
console.log(solution(29423363)); // 2
