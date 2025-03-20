/**
 * 대수 타입
 * -> 여러개의 타입을 합성해서 새롭게 만들어낸 타입
 * -> 합집합 타입과 교집합 타입이 존재
 */

/**
 *  1. 합집합 - Union Type
 */

let a: string | number | boolean;
a = 1;
a = "hello";
a = true;

let arr: (number | string | boolean)[] = [1, "hello", true];

type Dog = {
  name: string;
  color: string;
};

type Person = {
  name: string;
  language: string;
};

type Union1 = Dog | Person;

let union1: Union1 = {
  name: "",
  color: "",
};

let union2: Union1 = {
  name: "",
  language: "",
};

let union3: Union1 = {
  name: "",
  color: "",
  language: "",
};

/** ERROR
 * 한쪽 타입에만 포함되는 객체거나, 둘다 포함되는 교집합에 위치하는 객체들만 유니온 타입에 포함된다.
 */
// let union4: Union1 = {
//     name: ""
// }

/**
 * 2. 교집합 타입 - Intersection 타입
 */

let variable: number & string;

// dog 와 person의 모든 프로퍼티를 갖고 있는 객체만 교집합 타입으로 포함될 수 있다.
type Intersection = Dog & Person;
let intersection1: Intersection = {
  name: "",
  color: "",
  language: "",
};
