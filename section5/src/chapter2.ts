/**
 * 선언 합침
 */

/**
 * 💡 인터페이스는 동일한 이름으로 정의해도, 오류가 나지 않는다.
 *    그 이유는, 동일한 이름인 인터페이스들은 합쳐지기 때문이다. [ 선언 합침 ]
 *    하지만 동일한 프로퍼티를 중복 정의하는데, 타입을 다르게 정의하는 경우는 충돌이나 허용하지 않음
 *    반드시, 중복되는 프로퍼티는 동일한 타입으로만 정의해줘야한다. 서브타입도 X
 */
interface Person {
  name: string;
}

interface Person {
  // name: number; [ERR : 충돌]
  // name: "이름"  [ERR : 확장과 다르게 서브타입으로 선언해도 문제가 발생함]
  age: number;
}

interface Developer extends Person {
  name: "hello";
}

const person: Person = {
  name: "",
  age: 29,
};

/**
 * 🤔 언제 사용할까? -> 라이브러리 Module 보강하는 작업할때
 * 모듈보강
 */

interface Lib {
  a: number;
  b: number;
}

interface Lib {
  c: string;
}

const lib: Lib = {
  a: 1,
  b: 2,
  c: "보강",
};
