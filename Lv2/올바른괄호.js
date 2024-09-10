// my

function solution(s) {
  let stack = []; // 괄호를 추적할 빈 배열 생성

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") {
      stack.push("("); // 열린 괄호는 스택에 추가
    } else if (s[i] === ")") {
      if (stack.length === 0) {
        return false; // 닫는 괄호가 나오는데 스택이 비어있으면 잘못된 괄호
      }
      stack.pop(); // 닫는 괄호는 스택에서 열린 괄호를 제거
    }
  }

  return stack.length === 0; // 스택이 비어있으면 올바른 괄호, 아니면 잘못된 괄호
}

// another

function solution(s) {
  let cum = 0;
  for (let paren of s) {
    cum += paren === "(" ? 1 : -1;
    if (cum < 0) {
      return false;
    }
  }
  return cum === 0 ? true : false;
}
