// my

function solution(array) {
  var answer = [];
  // 원래 배열을 복사합니다.
  var a = array.slice();

  // 숫자 배열을 오름차순으로 정렬합니다.
  array.sort((a, b) => a - b);

  // 정렬된 배열의 첫 번째 요소(가장 작은 값)를 answer에 추가합니다.
  answer[0] = array[0];

  // 원래 배열에서 이 값의 인덱스를 찾습니다.
  for (let i = 0; i < a.length; i++) {
    if (a[i] === array[0]) {
      answer[1] = i;
      break; // 인덱스를 찾으면 반복을 중지합니다.
    }
  }

  return answer;
}

//best

function solution(array) {
  let max = Math.max(...array);
  return [max, array.indexOf(max)];
}
