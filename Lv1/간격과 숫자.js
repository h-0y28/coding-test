// 문제 설명
// 함수 solution은 정수 x와 자연수 n을 입력 받아, x부터 시작해 x씩 증가하는 숫자를 n개 지니는 리스트를 리턴해야 합니다. 다음 제한 조건을 보고, 조건을 만족하는 함수, solution을 완성해주세요.

// 제한 조건
// x는 -10000000 이상, 10000000 이하인 정수입니다.
// n은 1000 이하인 자연수입니다.

// mine
function solution(x, n) {
  var answer = [];
  let num = x;
  // 여기서 주의 할 점 js는 int를 사용하지 않는다 !! let이나 const 사용 헷갈리지 않기
  for (let i = 0; i < n; i++) {
    if (-10000000 <= x <= 10000000 && n <= 1000) {
      answer[i] = num;
      num += x;
    } else break;
  }

  return answer;
}

//best
function solution(x, n) {
  return Array(n)
    .fill(x)
    .map((v, i) => (i + 1) * v);
}
