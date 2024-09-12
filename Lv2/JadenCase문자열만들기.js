// my

function solution(s) {
  let arr = s.toLowerCase().split("");
  for (let i = 0; i < arr.length; i++) {
    if (i === 0 || arr[i - 1] === " ") {
      arr[i] = arr[i].toUpperCase();
    }
  }
  return arr.join("");
}

// another

function solution(s) {
  var answer = "";
  for (let i = 0; i < s.length; i++) {
    if (i === 0 || s[i - 1] === " ") {
      answer += s[i].toUpperCase();
    } else {
      answer += s[i].toLowerCase();
    }
  }
  return answer;
}

// anotehr2

function solution(s) {
  return s
    .split(" ")
    .map((v) => v.charAt(0).toUpperCase() + v.substring(1).toLowerCase())
    .join(" ");
}
