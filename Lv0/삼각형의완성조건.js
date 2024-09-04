// my - 쓸데없이 변수에 값을 넣어 그 변수를 반환함
function solution(sides) {
  sides.sort((a, b) => b - a);
  const a = sides[0] >= sides[1] + sides[2] ? 2 : 1;
  return a;
}

// best - 바로 값을 반환함

function solution(sides) {
  sides = sides.sort((a, b) => a - b);
  return sides[0] + sides[1] > sides[2] ? 1 : 2;
}
