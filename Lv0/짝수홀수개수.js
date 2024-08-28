// my

function solution(num_list) {
  var answer = [];
  answer[0] = num_list.filter((a) => a % 2 === 0).length;
  answer[1] = num_list.filter((a) => a % 2 !== 0).length;
  return answer;
}

// another

function solution(num_list) {
  var answer = [0, 0];

  for (let a of num_list) {
    answer[a % 2] += 1;
  }

  return answer;
}
