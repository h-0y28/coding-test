// my
function solution(s) {
  var answer = true;
  let sum_p = 0,
    sum_y = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "p" || s[i] === "P") sum_p++;
    if (s[i] === "y" || s[i] === "Y") sum_y++;
  }
  if (sum_p !== sum_y) answer = false;

  return answer;
}

// best
function numPY(s) {
  return (
    s.toUpperCase().split("P").length === s.toUpperCase().split("Y").length
  );
}
