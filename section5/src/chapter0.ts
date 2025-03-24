/**
 * ✅ 인터페이스
 * 타입별칭과 동일하게 타입의 이름을 지어주는 문법
 * 우리말로 상호간의 약속된 규칙이라는 뜻
 * `이 객체는 이런 형태를 가져야만 해` 같은 일종의 규칙을 만들어주는 문법
 * 객체의 구조를 정의하는데 특화된 문법으로 , 상속 · 합침 등의 특수한 기능을 제공한다.
 *
 * 인터페이스는 타입별칭처럼 유니온이나 인터섹션 타입을 만들지 못함
 * 앞에 I를 붙히는 관습이 꽤 있음.
 */

interface IPerson {
  readonly name: string;
  age?: number; // optional 프로퍼티 가능
  /**
   * 💡 함수 오버로딩 하고싶으면 함수타입 표현식이 아닌 호출 시그니처를 사용해야한다.
   */
  sayHi: () => void; // 함수타입 표현식
  sayHi2(): void; // 호출 시그니처
  sayHi2(a: number, b: number): void;
}

const person: IPerson = {
  name: "이정환",
  age: 27,
  sayHi: function () {
    console.log("say Hi!");
  },
  sayHi2(a?: number, b?: number) {
    console.log("say Hi2!");
  },
};
