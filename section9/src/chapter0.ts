/**
 * ✅ 조건부 타입
 * 삼항연산자를 통해 타입을 결정하는 문법
 */

type A = number extends string ? string : number;

type ObjA = {
  a: number;
};

type ObjB = {
  a: number;
  b: number;
};

type B = ObjB extends ObjA ? number : string;

// 🤔 언제쓸까 ? --> 제네릭과 함께 쓸 때 위력이 잘 발휘됨

/**
 * 제네릭과 조건부 타입
 */

type StringNumberSwitch<T> = T extends number ? string : number;

let varA: StringNumberSwitch<number> = "123";
let varB: StringNumberSwitch<string> = 123;

function removeSpaces<T>(text: T): T extends string ? string : undefined; // 오버로딩 시그니처

function removeSpaces(text: any) {
  /**
   * 제네릭을 다룰때 타입 변수 T는 함수 내부에서는 unknown 타입이 되므로,
   * 애초에 T도 모르기 때문에 조건부 타입의 결과를 알 수 있는방법이 없어 타입단언을 any로 해줘야함
   * -> 하지만 함수 오버로딩으로 해결 가능임
   * 구현 시그니처 내부에서 조건부 타입의 결과를 추론할 수 있게 되기때문에
   * 조건문 안에서는 TypeScript가 string을 반환해야 된다는걸 아는것임
   */

  if (typeof text === "string") {
    return text.replaceAll(" ", ""); //as any;
  } else {
    return undefined; //as any;
  }
}

let result = removeSpaces("hi im winterlood");
result.toUpperCase();

let result2 = removeSpaces(undefined);
