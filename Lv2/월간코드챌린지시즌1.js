// first my code

function solution(s) {
  let numSum = 0,
    cnt = 0;
  while (s.lenght != 1) {
    numSum += s.split("").filter((a) => a === "0").length;
    let sLength = s.split("").filter((a) => a === "1").length;
    s = sLength.toString(2);
    cnt++;
  }
  return [numSum, cnt];
}

// seconde my code for optimization

function solution(s) {
  let numSum = 0,
    cnt = 0;

  // 반복
  while (s.length != 1) {
    let zeros = 0,
      ones = 0;

    // 0과 1의 갯수를 한 번에
    for (let char of s) {
      if (char === "0") zeros++;
      else ones++;
    }

    numSum += zeros;
    s = ones.toString(2);
    cnt++;
  }

  return [cnt, numSum];
}

// another

function solution(s) {
  var answer = [0, 0];
  while (s.length > 1) {
    answer[0]++;
    answer[1] += (s.match(/0/g) || []).length;
    s = s.replace(/0/g, "").length.toString(2);
  }
  return answer;
}
