// my

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

// another

function solution(t, p) {
  let count = 0;
  for (let i = 0; i <= t.length - p.length; i++) {
    let value = t.slice(i, i + p.length);
    if (+p >= +value) count++;
  }
  return count;
}
