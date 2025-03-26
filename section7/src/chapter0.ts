/**
 * 제네릭 [ Generic : 일반적인 & 포괄적인 ]
 * 제네릭 함수 : 함수의 인수에 따라 반환값의 타입을 가변적으로 정해줄 수 있음
 *     ✅ <T> : 타입 변수 ; 함수 호출시 인수의 타입에 따라 타입변수에 저장되는값이 달라짐
 */

function func<T>(value: T): T {
  return value;
}

let num = func(10); // num이 number로 추론
let boolean = func(true); // boolean으로 추론
let string = func("string"); // string으로 추론

/**
 * 💡 정리하자면, 타입 변수와 함께 여러 타입의 값을 인수로 받아 범용적으로 쓸 수 있는
 *    함수를 제네릭 함수라고 하며, 제네릭 함수들은 타입 변수를 꺽쇠와 함께
 *    함수의 이름뒤에 선언을 하고, 이 타입 변수에 할당되는 타입은 함수를 호출할 때 인수에따라 결정된다.
 */

let arr = func([1, 2, 3]); // number[]로 추론
/**
 * 🤔 튜플 타입[길이와 타입이 고정된 배열]으로 추론하도록 하고싶다면?
 */

// 1. 단언
let arr1 = func([1, 2, 3] as [number, number, number]); // [number, number, number] 로 추론
// 2. 함수이름 뒤 <> 안에 타입 변수 T에 할당하고싶은 타입써주기
let arr2 = func<[number, number, number]>([1, 2, 3]);
