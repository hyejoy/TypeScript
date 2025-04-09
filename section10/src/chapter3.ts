/**
 * 조건부 타입 기반의 유틸리티 타입들
 */

/**
 * Exclude<T,U>
 * -> 제외하다, 추방하다
 * -> T에서 U를 제거하는 타입
 */

type A = Exclude<string | boolean, boolean>; // string
/**
 * 🤔 Exclude를 직접 구현해보면?
 */
type Exclude<T,U> = T extends U ? never: T;

/**
 * Extract<T,U>
 * -> T에서 U를 추출하는 타입
 */

type B = Extract<string|boolean|number, string>; // string

/**
 * 🤔 Extract를 직접 구현해보자면? 
 */

type Extract<T,U> = T extends U ? T : never;

/**
 * RetrunType<T>
 * -> 함수의 반환값 타입을 추출하는 타입
 */

function funcA() {
    return 'hello'
}

function funcB() {
    return 10;
}

type RuturnA = ReturnType<typeof funcA>;
type RuturnB = ReturnType<typeof funcB>;

/**
 * 🤔 ReturnType을 직접 구현한다면?
 */

// T에 함수타입만 들어올수 있도록 구현
type ReturnType<T extends (...args: any) => any> = T extends (
    ...args: any
) => infer R ? R: never;