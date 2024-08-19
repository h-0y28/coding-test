## BEST CODE 분석

#### 간격과 숫자

```
function solution(x, n) {
  return Array(n)
    .fill(x)
    .map((v, i) => (i + 1) * v);
}
```

1. Array(n)

- Array(n)는 길이가 n인 빈 배열을 생성
- 예) n이 5라면 [ , , , , ]와 같은 배열이 생성됨

2. .fill(x)

- 배열의 모든 요소를 x로 채웁니다.
- Array(n).fill(x)는 n개의 요소가 모두 x인 배열 생성
- 예) x가 3이고 n이 5라면 [3, 3, 3, 3, 3]와 같은 배열이 됨

3. .map((v, i) => (i + 1) \* v)

- .map() 메서드는 배열의 각 요소를 변환하여 새로운 배열 생성
- **v는 현재 배열의 값**(즉, x)을 나타내고, **i는 현재 요소의 인덱스 임**(0부터 시작).
  (i + 1) \* v는 x에 (i + 1)을 곱한 값을 반환합니다.
- 예) 인덱스 i가 0일 때는 (0 + 1) _ x, 즉 x의 1배를 반환하고, 인덱스 i가 1일 때는 (1 + 1) _ x, 즉 x의 2배를 반환합니다.
  결과적으로 이 map 함수는 [x * 1, x * 2, x * 3, ..., x * n]의 형태로 배열을 생성합니다.

---

#### 평균

```
function average(array) {
  return array.reduce((a, b) => a + b) / array.length;
}

// 출력 코드
var testArray = [5, 3, 4];
console.log("평균값 : " + average(testArray));
```

- **reduce** : 배열의 각 요소에 대해 지정된 **콜백 함수**를 실행하고, 그 결과를 하나의 값으로 **축약(reduce)**하는 데 사용
- a: 누적 값, b : 배열의 현재 요소
