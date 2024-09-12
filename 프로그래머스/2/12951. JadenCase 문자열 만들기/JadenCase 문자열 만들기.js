function solution(s) {
  let arr = s.toLowerCase().split("");
  for (let i = 0; i < arr.length; i++) {
    if (i === 0 || arr[i - 1] === " ") {
      arr[i] = arr[i].toUpperCase();
    }
  }
  return arr.join("");
}