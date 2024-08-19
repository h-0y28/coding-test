// mine

function solution(arr) {
  var answer = 0;
  for (let i = 0; i < arr.length; i++) {
    answer += arr[i];
  }
  answer /= arr.length;
  return answer;
}

// best

function average(array) {
  // reduce : 배열의 각 요소에 대해 지정된 콜백 함수를 실행하고, 그 결과를 하나의 값으로 축약(reduce)하는 데 사용
  // a: 누적 값, b : 배열의 현재 요소
  return array.reduce((a, b) => a + b) / array.length;
}

// 아래는 테스트로 출력해 보기 위한 코드입니다.
var testArray = [5, 3, 4];
console.log("평균값 : " + average(testArray));
