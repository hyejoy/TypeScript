/**
 * infer
 * 조건부 타입에서 특정타입을 추론하는 방법
 * inference -> 추론하다
 */

type Func = () => string;
// func타입에 반환값에 해당하는 타입만 가져오려면 어떻게 해야될까?

type ReturnType<T> = T extends () => string ? string : never;

type test = ReturnType<Func>; // () => string extends () => string ? string : never; ===> string

type FuncA = () => string;
type FuncB = () => number;

type A = ReturnType<FuncA>; // string
type B = ReturnType<FuncB>; // never [ number 타입이 되어야하는걸 원했는데..]

/**
 * extends 우항에 비교하는 타입의 반환값을 스트링으로 고정해둿기 때문에
 * 어쩔 수없이 함수의 반환값 타입이 스트링 타입이냐 라는것밖에 검사를 못하고 있음
 * 이럴때 infer R을 쓴다.
 * infer R의 동작방식은 조건식을 참으로 만드는 타입을 추론하도록 동작함
 * 따라서 밑의 식에서 () => string 가 () => infer R의 서브타입이 되려면 이때 R타입은 string이 되야하므로 string으로 추론됨
 */

type ReturnInferType<T> = T extends () => infer R ? R : never;
type C = ReturnInferType<FuncA>;
type D = ReturnInferType<FuncB>;

type E = ReturnInferType<number>; // number extendx () => R ... 추론 불가능 [never반환]

/**
 * 예제
 */

type PromiseUnpack<T> = T extends Promise<infer R> ? R : never;

// promise의 결과값만 똑때오는 결과값을 만들자
// 1. T는 프로미스 타입이어야 한다.
// 2. 프로미스 타입의 결과값 타입을 반환해야 한다.

// Promise<number>가 Promise<R>의 서브타입이 되어야하는데 이때 R의 타입은? -> number
type PromiseA = PromiseUnpack<Promise<number>>; // number

// Promise<string>이 Promise<R>의 서브타입이 되어야하는데 이때 R의 타입은? -> string
type PromiseB = PromiseUnpack<Promise<string>>; // string
