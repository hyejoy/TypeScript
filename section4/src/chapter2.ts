/**
 * 함수 타입 호환성
 * 특정 함수 타입을 다른 함수 타입으로 취급해도 괜찮은가를 판단
 * 1. 반환값의 타입이 호환되는가
 * 2. 매개변수의 타입이 호환되는가
 */

// ✅ 기준 1) 반환값 호환
type A = () => number;
type B = () => 10;

let a: A = () => 10;
let b: B = () => 10;

a = b; // number return  = 리터럴 return; [ 반환값 업캐스팅 ]
// b = a;  [ ERR :: 반환값 다운캐스팅 ]

// ✅ 기준 2) 매개변수가 호환
//     2-1) 매개변수의 개수가 같을때
/**
 * 매개변수로 호환성을 판단할때는 반대로 업캐스팅일 때 호환이 안됨.
 */

type C = (value: number) => void;
type D = (value: 10) => void;

let c: C = (value) => {};
let d: D = (value) => {};

// c = d; [ ERR :: 매개변수의 업캐스팅은 오류!]
d = c;

type Animal = {
  name: string;
};
type Dog = {
  name: string;
  color: string;
};

let animalFunc = (animal: Animal) => {
  console.log(animal.name);
};
let dogFunc = (dog: Dog) => {
  console.log(dog.name);
  console.log(dog.color);
};

// animalFunc = dogFunc;  [ ERR :: dog 의 color 프로퍼티가 없음. 업캐스팅 안되도록 하는 이유]

//     2-2) 매개변수의 개수가 다를때 (타입이 같은 매개변수가 있을때에만 적용됨)

type Func1 = (a: number, b: number) => void;
type Func2 = (a: number) => void;

let func1: Func1 = (a, b) => {};
let func2: Func2 = (a) => {};

func1 = func2;
// func2 = func1; [ ERR :: 할당하는 함수의 매개변수의 갯수가 더 적을 때에만 호환이 됨]
