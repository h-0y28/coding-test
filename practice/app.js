function solution(arr) {
  let max1 = Math.max(arr[0], arr[1]);
  let max2 = Math.min(arr[0], arr[1]);

  for (let i = 2; i < arr.length; i++) {
    const num = arr[i];
    if (num > max1) {
      max2 = max1;
      max1 = num;
    } else if (num > max2) {
      max2 = num;
    }
  }

  return max1 * max2;
}

// 예시 실행
console.log(solution([1, 2, 3, 4, 5]));
