// my

function solution(x) {
  var str = x.toString();
  var array = str.split("").map(Number);
  const sumOfDigits = array.reduce((a, b) => a + b, 0);
  if (x % sumOfDigits === 0) {
    return true;
  } else return false;
}

//another

function solution(x) {
  let num = x;
  let sum = 0;
  do {
    sum += x % 10;
    x = Math.floor(x / 10);
  } while (x > 0);

  return !(num % sum);
}

//another2

function Harshad(n) {
  return !(n % (n + "").split("").reduce((a, b) => +b + +a));
}
