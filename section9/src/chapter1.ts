/**
 * 분산적인 조건부 타입
 * 조건부 타입을 유니온과 함께 사용할 때 타입이 분산적으로 동작하게 업그레이드 되는 문법
 */

type StringNumberSwitch<T> = T extends number ? string : number;

// 조건부 타입에 유니온 타입을 할당해버리면 그때부터는 분산적 조건부 타입으로 업그레이드됨
let c: StringNumberSwitch<number | string>;

/**
 * 한번은 number , 한번은 string으로 나눠서 들어감
 * StringNumberSwitch<number> | StringNumberSwitch<string>
 * 이렇게 분리된 결과들을 각각 유니온으로 묶어준다고 이해하면 됨
 * 따라서 string | number 가 됨.
 */

let d: StringNumberSwitch<boolean | number | string>;
// 1. StringNumberSwitch<boolean> |
// 2. StringNumberSwitch<number> |
// 3. StringNumberSwitch<string> |
// 각각의 결과 number , string, number ==> string | number

/**
 * 실용적인 예제
 */

// T가 U의 서브타입이라면 never, 아니라면 T타입
type Exclude<T, U> = T extends U ? never : T;

type A = Exclude<number | string | boolean, string>;
// 1. Exclude<number, string> |
// 2. Exclude<string, string> |
// 3. Exclude<boolean, string>
// 각각의 결과  string, never, boolean
/**
 * ⚠ union타입에서 never 타입이 포함되어 있으면 never 는 결국 사라짐
 * 집합으로 생각해보면, 타입들간 합집합인데 never는 공집합이기 때문에 합집합해도 결국 사라짐
 * 따라서 결과는  number | boolean
 */

type Extract<T, U> = T extends U ? T : never;
type B = Extract<number | string | boolean, string>; // 결과는 string

/**
 * 🤔 분산적인 조건부 타입이 되지 않도록 하려면?
 * => extends 양옆에 [] 씌워주면 된다.
 * union타입 전달해도 분산 안됨
 */
type StringNumberSwitch2<T> = [T] extends [number] ? string : number;
let test: StringNumberSwitch2<number | string>; // false이므로 number
