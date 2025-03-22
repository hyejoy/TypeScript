/**
 * 💡 타입 추론 : 타입스크립트가 변수의 타입을 자동으로 추론
 */

/**
 *    대표적인 타입 추론이 가능한 상황
 *    코드를 봤을 때 변수의 타입을 추론할 정보가 있으면 추론이 가능
 *  ✅ 일반적인 변수를 선언하는 상황 -> 변수의 초기값을 기준으로 추론
 *
 */
let a = 10;
let b = "string";
let c = {
  id: 1,
  name: "이정환",
  profile: {
    nickname: "winterlood",
  },
  urls: ["https://winterlodd.com"],
};

let { id, name, profile, urls } = c; // 구조분해할 때에도 변수의 타입을 자동으로 추론

let [one, two, three] = [1, "hello", true];

function func(message = "defaultValue") {
  // 매개변수 기본값 설정되어있으면 추론가능
  // 함수의 반환값타입 추론은 return문 다음에 오는 반환값 기준으로 추론
  return "string";
}

/**
 * ✅ type이 자꾸 바뀌는 상황 [ any타입의 진화 ]
 * let d: any 로 정의하는것과 다르다, Any 타입을 처음부터 정의하면, 어디서든 다 any Type으로 동작
 */

let d; // any로 추론 (암묵적 any Type)
d = 10; // number 타입으로 진화
d.toFixed(); // number로 추론

d = "hello";
d; // string타입으로 진화
d.toUpperCase();

/**
 * ✅ 상수로 정의하게되면,
 *  해당 변수가 갖는 값을 리터럴 타입으로 갖게된다.
 */
const num = 10;
const string = "hello";

/**
 * ✅ 여러타입으로 구성된 배열을 선언하는 경우
 * 해당 타입으로 구성된 유니온 타입으로 갖는 배열타입으로 추론됨
 */

let arr = [1, "hello"]; // (number | string)[] 타입으로 추론

/**
 * 💡 타입 넓히기
 *  상수로 선언했을 경우, 리터럴로 추론하지만, let으로 선언한 변수의 경우에는
 *  개발자가 범용적으로 사용할 수 있도록 number타입으로 로 추론한다.
 *  이처럼 타입스크립트가 범용적으로 사용되는 타입으로 추론해주는 것을
 *  '타입 넓히기 ' 라고한다.
 *
 */
