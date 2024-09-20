// my

function solution(left, right) {
  let sum = 0;
  for (let i = left; i <= right; i++) {
    sum += check(i);
  }
  return sum;
}

function check(num) {
  sum = 1;
  for (let i = 2; i <= num; i++) {
    if (num % i === 0) {
      sum++;
    }
  }
  return sum % 2 === 0 ? num : -num;
}

// another
// 제곱근이 정수면 약수의 개수가 홀수

function solution(left, right) {
  var answer = 0;
  for (let i = left; i <= right; i++) {
    if (Number.isInteger(Math.sqrt(i))) {
      answer -= i;
    } else {
      answer += i;
    }
  }
  return answer;
}
