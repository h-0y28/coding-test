// my

function solution(my_string, n) {
  let answer = "";
  for (let i = my_string.length - n; i < my_string.length; i++) {
    answer += my_string[i];
  }
  return answer;
}

// another

function solution(my_string, n) {
  var answer = my_string.slice(-1 * n);
  return answer;
}

// another2

function solution(my_string, n) {
  return my_string.substring(my_string.length - n);
}
