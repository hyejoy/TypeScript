/**
 * 함수 오버로딩
 * -> 함수를 매개변수의 개수나 타입에 따라 여러가지 버전으로 정의하는 방법
 *    함수의 이름은 같지만, 매개변수의 개수, 타입에 따라 정의 가능
 *    자바스크립트에서는 지원안되고, 오직 타입스크립트에서만 지원해줌
 *
 *    하나의 함수 func
 *    모든 매개변수의 타입 nujmber
 *    Ver1. 매개변수가 1 -> 이 매개변수에 20을 곱한값 출력
 *    Ver2. 매개변수가 3개 -> 이 매개변수들을 다 더한 값을 출력
 *
 */

// 버전들 -> 오버로드 시그니쳐 [ 함수의 구현부 없이 선언식만 써놓은것을 말함 ]
function func(a: number): void;
function func(a: number, b: number, c: number): void;

// 실제 구현부 -> 구현 시그니쳐
function func(a: number, b?: number, c?: number) {
  if (typeof b === "number" && typeof c === "number") {
    console.log(a + b + c);
  } else {
    console.log(a * 20);
  }
}

// 함수 호출시 인수들의 타입이 실제 구현부에 정의된 매개변수의 개수나 타입에 따르지 않고
// 오버로드 시그니처들중 하나의 버전을 따라감.

func(1);
func(1, 2, 3);
// ERR :: func();
// ERR :: func(1, 2);
