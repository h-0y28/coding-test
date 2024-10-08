function solution(t, p) {
  let cnt = 0;
  let pNum = parseInt(p);

  for (let i = 0; i <= t.length - p.length; i++) {
    let substring = t.substring(i, i + p.length);
    let subNum = parseInt(substring);

    if (subNum <= pNum) {
      cnt++;
    }
  }

  return cnt;
}

// 예시 실행
console.log(solution("3141592", "271")); // 2
console.log(solution("500220839878", "7")); // 8
console.log(solution("10203", "15")); // 3
