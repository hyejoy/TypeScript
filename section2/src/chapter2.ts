// 배열
let numArr: number[] = [1, 2, 3];
let strArr: string[] = ["hello", "im", "hyejo"];
let boolArr1: boolean[] = [true, false, true];

// 제네릭 문법
let boolArr2: Array<boolean> = [true, false, true];

// 배열에 들어가는 요소들의 타입이 다양한 경우
// 배열의 타입이 string이나 number 형태일수도 있다 ==> (string|number) [유니온]
let multiArr: (string | number)[] = [1, "hello"];

// 다차원 배열의 타입을 정의하는 방법 => 3차원이든 4차원이든 [] 추가
let doublerArr: number[][] = [
  [1, 2, 3],
  [4, 5],
];

// 튜플 [타입스크립트에만 존재함]
// 길이와 타입이 고정된 배열
let tup1: [number, number] = [1, 2];

// tup1 = [1,2,3];
// tup1 = ["1", "2"];

let type2: [number, string, boolean] = [1, "2", true];

/**
 * 배열 메소드를 사용해도 튜플의 길이 제한이 발동하지 않음
 * 왜냐면 자바스크립트의 배열이라고 생각하기 때문에 알아보지 못함
 * 튜플 타입을 사용할때는 배열메소드를 사용할때는 각별히 주의!
 */
tup1.push(1);
tup1.pop();
tup1.pop();

/**튜플을 사용하면 인덱스의 위치에 따라 넣어야 되는 값들이 정해져 있고,
 * 그 순서를지키는게 중요할 때 이런식으로 튜플 타입을 이요해 값을 잘못 넣지 않도록
 * 방지 할 수 있다.
 */
const users: [string, number][] = [
  ["이정환", 1],
  ["최혜조", 2],
  ["김민재", 3],
  ["최소혜", 4],
  //   [5, "이름"],
];
