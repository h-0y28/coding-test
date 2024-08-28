// best

function solution(price) {
  var answer = 0;
  answer =
    price >= 500000
      ? price * 0.8
      : price >= 300000
      ? price * 0.9
      : price >= 100000
      ? price * 0.95
      : price;
  return Math.floor(answer);
}

// another

const discounts = [
  [500000, 20],
  [300000, 10],
  [100000, 5],
];

const solution = (price) => {
  for (const discount of discounts)
    if (price >= discount[0])
      return Math.floor(price - (price * discount[1]) / 100);
  return price;
};
