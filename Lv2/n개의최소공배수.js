// my

// 최대 공약수(GCD)를 계산하는 함수
function gcd(a, b) {
  if (b === 0) {
    return Math.abs(a);
  }
  return gcd(b, a % b);
}

// 최소 공배수(LCM)를 계산하는 함수
function lcm(a, b) {
  return Math.abs(a * b) / gcd(a, b);
}

// 배열 안의 여러 숫자의 LCM을 계산하는 함수
function lcmOfArray(arr) {
  return arr.reduce((accumulator, currentValue) =>
    lcm(accumulator, currentValue)
  );
}

// 예시
const numbers = [4, 5, 6];
const result = lcmOfArray(numbers);
console.log(`배열 [${numbers}]의 최소 공배수는 ${result}입니다.`);

// another

function nlcm(num) {
  return num.reduce((a, b) => (a * b) / gcd(a, b));
}

function gcd(a, b) {
  return a % b ? gcd(b, a % b) : b;
}
