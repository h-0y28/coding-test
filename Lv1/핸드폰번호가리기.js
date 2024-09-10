// my
function solution(phone_number) {
  // 앞의 부분을 '*'로 채우고 마지막 4자리만 남김
  const hiddenPart = "*".repeat(phone_number.length - 4);
  const visiblePart = phone_number.slice(-4);
  return hiddenPart + visiblePart;
}

// another

// 문제가 개편되었습니다. 이로 인해 함수 구성이나 테스트케이스가 변경되어, 과거의 코드는 동작하지 않을 수 있습니다.
// 새로운 함수 구성을 적용하려면 [코드 초기화] 버튼을 누르세요. 단, [코드 초기화] 버튼을 누르면 작성 중인 코드는 사라집니다.
function hide_numbers(s) {
  return s.replace(/\d(?=\d{4})/g, "*");
}

// 아래는 테스트로 출력해 보기 위한 코드입니다.
console.log("결과 : " + hide_numbers("01033334444"));
