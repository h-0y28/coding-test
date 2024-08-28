// my

function solution(n) {
  const g = gcd(n, 6);
  return n / g;
}

function gcd(a, b) {
  return b === 0 ? a : gcd(b, a % b);
}

// another

const solution = (n) => {
  let piece = 6;

  while (true) {
    if (piece % n === 0) {
      break;
    }
    piece += 6;
  }

  return piece / 6;
};
