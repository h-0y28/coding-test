function solution(n) {
  return parseInt(
    n
      .toString() // 숫자를 문자열로 변환
      .split("") // 각 자릿수를 배열로 변환
      .sort((a, b) => b - a) // 내림차순으로 정렬
      .join("") // 배열을 문자열로 합침
  );
}
