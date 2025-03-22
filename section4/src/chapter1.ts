/**
 * 함수 타입 표현식 [ Function Type Expression ]
 */

type Operation = (a: number, b: number) => number;
/**
 * 함수 타입 표현식을 이용하면 비슷한 형식의 함수들을 여러개 만들어야 될때,
 * 매개변수와 변환값에 일일이 타입을 정의해주지 않아도 됨.
 */
const add: Operation = (a, b) => a + b;
const sub: Operation = (a, b) => a - b;
const multiply: Operation = (a, b) => a * b;
const divide: Operation = (a, b) => a / b;

const etc: (a: number, b: number) => number = (a, b) => a + b;

/**
 * 호출 시그니처 (콜 시그니처)
 * 🤔 함수가 객체표현식을 쓴다고? -> 자바스크립트의 함수도 객체이기 때문이다.
 */

type Operation2 = {
  (a: number, b: number): number;
};
const add2: Operation2 = (a, b) => a + b;
const sub2: Operation2 = (a, b) => a - b;
const multiply2: Operation2 = (a, b) => a * b;
const divide2: Operation2 = (a, b) => a / b;

/**
 * 호출 시그니처는 하이브리드 형태로 쓸수도 있음
 * 객체로도 쓸수도  있고, 함수로도 쓸수도 있다. 잘 쓰이진 않음!
 */

type Operation3 = {
  (a: number, b: number): number;
  name: string;
};

const test: Operation3 = (a, b) => a * b;
test.name = "test!";

test(1, 2);
console.log(test.name);
