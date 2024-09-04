//my

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

// best ⭐⭐⭐⭐

function solution(numbers) {
  numbers.sort((a, b) => b - a);
  return numbers[0] * numbers[1];
}
