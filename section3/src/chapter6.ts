/**
 * 타입 단언
 */

type Person = {
  name: string;
  age: number;
};

let person_exam = {}; // 타입 {} 로 타입추론됨.
//[ERROR] person_exam.name = '해초';
//[ERROR] person_exam.age = 29;

/**
 * 🤔 나중에 값을 넣어주고 싶을땐 어떻게 해야될까?
 * 💡 as 키워드 + type 명시
 */

let person = {} as Person;
person.name = "해초";
person.age = 29;

/**
 * Dog 객체에서 bread 추가 프로퍼티 선언 -> 초과 프로퍼티 검사 발동으로 Err
 * 변수를 초기화할때 객체 리터럴을 사용하면 발동함.
 * 추가 프로퍼티를 꼭 넣어야 하는경우는 type 단언을 사용하면 해결 할 수 있음!
 */

type Dog = {
  name: string;
  color: string;
};

let dog = {
  name: "수수",
  color: "gold",
  bread: "진도",
} as Dog;

/**
 * ✅ 타입단언을 사용해야 하는 경우
 *  -> 값 as 단언 의 단언식에서 A as B라고 했을 때
 *      A 가 B 의 슈퍼타입이거나 반대로 A가 B의 서브 타입이어야 한다.
 */

let num1 = 10 as never; // 10은 number 타입이고 never은 모든 타입의 서브 타입이기 때문에 가능
let num2 = 10 as unknown; // 10은 number 타입이고 unknown은 모든 타입의 슈퍼 타입이기 때문에 가능

// 좋은 문법은 아니지만,  중간에 unknown을 끼고, 다중으로 단언을 하면 가능
let num3 = 10 as unknown as string;

/**
 * const 단언
 *  - 객체 타입과 함께 사용할 때 활용가 있음 [readonly]
 *    프로퍼티의 값이 전부 readonly인 경우, 일일이 앞에 readonly를 붙혀줄 필요없이
 *    const 단언을 사용하면 된다.
 */

let num4 = 10 as const; // 리터럴타입으로 타입추론 됨.

let cat = {
  name: "야옹이",
  color: "노란색",
} as const; // 모든 프로퍼티가 readonly 프로퍼티로 추론된다.

// [ERROR] cat.name = "";

/**
 * Non Null 단언 [!]
 *  - 어떤 값이 null 이거나 undefined이 아니라고 알려주는 단언
 */

type Post = {
  title: string;
  author?: string; // 익명인 경우를 고려하여 선택적 프로퍼티로 정의
};

let post: Post = {
  title: "게시글",
  author: "이정환",
};

// author가 선택적 프로퍼티이므로 len값자체가 undfined가 될 가능성이 있음
// post.author?.length에서 ! 로 바꿔주면 not-null 단언 연산자로 바뀜
const len: number = post.author!.length;
