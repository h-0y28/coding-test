// my

function solution(my_string) {
  return my_string.split("").reverse().join("");
}

//another

function solution(my_string) {
  var answer = [...my_string].reverse().join("");
  return answer;
}
