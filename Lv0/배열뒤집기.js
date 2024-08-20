//my

function solution(num_list) {
  var answer = [];
  for (let i = 0; i < num_list.length; i++) {
    answer[num_list.length - 1 - i] = num_list[i];
  }
  return answer;
}

// other
function solution(num_list) {
  return num_list.reverse();
}
