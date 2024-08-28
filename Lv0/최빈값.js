// my

function solution(array) {
  const frequency = {}; // 각 요소의 빈도를 저장할 객체
  let maxFrequency = 0; // 가장 높은 빈도를 추적
  let mode = null; // 최빈값을 저장
  let multipleModes = false; // 최빈값이 여러 개인지 여부

  // 배열을 순회하며 빈도를 계산
  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    frequency[element] = (frequency[element] || 0) + 1;

    // 최대 빈도를 가진 요소를 추적
    if (frequency[element] > maxFrequency) {
      maxFrequency = frequency[element];
      mode = element;
      multipleModes = false; // 새로운 최빈값이 발견되었으므로 false로 설정
    } else if (frequency[element] === maxFrequency) {
      multipleModes = true; // 같은 빈도를 가진 요소가 또 나타난 경우
    }
  }

  // 최빈값이 여러 개인 경우 -1 반환, 그렇지 않으면 최빈값 반환
  return multipleModes ? -1 : mode;
}

//best

function solution(array) {
  let m = new Map();
  for (let n of array) m.set(n, (m.get(n) || 0) + 1);
  m = [...m].sort((a, b) => b[1] - a[1]);
  return m.length === 1 || m[0][1] > m[1][1] ? m[0][0] : -1;
}
