// my > another

function solution(array, height) {
  return array.filter((st) => st > height).length;
}
