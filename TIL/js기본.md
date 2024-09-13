#### readline

- Node.js에서 **표준 입력/출력 인터페이스를 제공**하는 모듈
- **콘솔**에서 **입 출력** 가능

#### require

- Node.js에서 **모듈을 불러오기** 위해 사용되는 함수입니다.
- 특정 기능이나 라이브러리를 다른 파일에서 가져와 사용할 때

```
const readline = require('readline');
```

---

#### readline.createInterface

- 인터페이스 생성

#### input: process.stdin

- 표준 입력(콘솔 입력) 사용

#### output: process.stdout

- 표준 출력(콘솔 출력) 사용

```
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

```

---

#### rl.on('line', function (line) { ... }):

- 콘솔에서 한 줄의 입력이 들어올 때마다 실행되는 콜백 함수를 설정합니다.

line은 사용자가 입력한 문자열
입력을 받을 때마다 input 배열에 이 문자열을 저장.
다만, 배열의 첫 번째 요소로 덮어쓰는 방식으로 동작

```
let input = [];

rl.on('line', function (line) {
    input = [line];
});
```

---

#### rl.on('close', function() { ... }):

- 입력 스트림이 닫힐 때(사용자가 Ctrl+D를 누르거나 프로그램이 종료될 때) 실행되는 콜백 함수를 설정합니다.
- 이전에 저장된 input 배열의 첫 번째 요소를 str이라는 변수에 저장

```
.on('close', function() {
    str = input[0];
});
```
