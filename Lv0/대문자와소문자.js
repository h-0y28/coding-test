// my - 아스키 코드 사용

function solution(my_string) {
  return my_string
    .split("")
    .map((a) => {
      const charCode = a.charCodeAt(0);
      return charCode >= 97
        ? String.fromCharCode(charCode - 32)
        : String.fromCharCode(charCode + 32);
    })
    .join("");
}

// another
// toLowerCase, toUpperCase

function solution(my_string) {
  var answer = "";
  for (let c of my_string)
    answer += c === c.toLowerCase() ? c.toUpperCase() : c.toLowerCase();
  return answer;
}
