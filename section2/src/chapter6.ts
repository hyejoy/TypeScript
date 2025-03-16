// any
// 특정 변수의 타입을 우리가 확실히 모를때
// 어떤 타입이든 넣을 수 있음

let anyVar: any = 10;
anyVar = "hello";

anyVar = true;
anyVar = {};
anyVar = () => {};

anyVar.toUpperCase();
anyVar.toFixed();

// 반대로 모든 타입의 변수에 다 AnyType의 값을 집어 넣을 수도 있다.
let num: number = 20;
num = anyVar;

/**
 * 하지만, 컴파일하면 오류 발생함.
 * any type은 타입검사를 어찌되든 다 통과하는 치트키 같은 타입이기 때문에 사실상
 * type 검사를 안하는거와 똑같음
 * 그래서 이렇게 변수에 AnyType을 지정한다는건  TypeScript가 가지는 이점을 다 포기한다는 것과 다를게 없다.
 */

// unknown
// unknown 값은 any와 같이 모든 값을 저장할 수 있지만, 반대로는 안됨
let unknownVar: unknown;
unknownVar = "";
unknownVar = 1;
unknownVar = () => {};

// num = unknownVar; 오류발생
// unkown 현재 변수가 넘버 타입을 확실히 밝혀주었을 때만
// 언노운 타입의 변수를 넘버 타입으로 정제해서 사용을 할 수 있다. [ 타입정제, 타입 좁히기 ]
if (typeof unknownVar === "number") {
  num = unknownVar;
}

/**
 * 💡 any 타입과 unknown 타입을 변수의 타입으로 지정을 하면 이변수는 모든 값을 할당 받을 수 있지만,
 * Any Type은 반대로도 모두 다 가능한 반면에, Unknown Type은 반대로 전부 다 안된다.
 * 그렇기 때문에, 우리가 변수에 저장할 값의 타입이 확실하지 않을 때에는 Any 타입보다는 조금 더 안전한
 * unknown 타입을 활용하는 것이 좋다. Unknown 타입은 적어도 어떤 연산이나 어떤 메서드나 어떤 변수에나
 * 값을 넣을 수 없기 때문에, 런타임 에러를 일으키는 any 타입보다 훨씬 낫다.
 */
