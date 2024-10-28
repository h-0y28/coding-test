// my

function solution(arr) {
  var answer = [];
  for (let i = 0; i < arr.length; i++) {
    // console.log("i: "+arr[i]+",i+1:  "+arr[i+1])
    if (arr[i] !== arr[i + 1]) answer.push(arr[i]);
  }

  return answer;
}

// another

function solution(arr) {
  return arr.filter((val, index) => val != arr[index + 1]);
}
