/**
 * 제네릭 인터페이스
 */

interface KeyPare<K, V> {
  key: K;
  value: V;
}

// 제네릭 인터페이스는 제네릭 함수와 달리 타입으로 정의할 때
// 반드시 <> 안에 타입 변수타입을 정의해줘야한다.
let keyPair: KeyPare<string, number> = {
  key: "key",
  value: 0,
};

/**
 * 💡 하나의 인터페이스로 다양한 타입의 객체를 표현 할 수 있음
 */

let keyPair2: KeyPare<boolean, string[]> = {
  key: true,
  value: ["1"],
};

/**
 * 인덱스 시그니처
 * ▶ 프로퍼티의 키와 value의 타입에 관련된 규칙만 만족하면
 *    어떤 객체든 허용하는 유연한 객체 타입을 만드는 문법 [section2/chapter4.ts]
 */

interface NumberMap {
  [key: string]: number;
}

let numberMap1: NumberMap = {
  key: 123,
  key2: -1111,
};

/**
 * ✅ 제네릭 인터페이스 + 인덱스 시그니처
 * 하나의 type으로 다양한 객체타입을 표현가능
 */
interface Map<V> {
  [key: string]: V;
}

let stringMap: Map<string> = {
  key: "value",
  key2: "value2",
};

let booleanMap: Map<boolean> = {
  key: true,
  key2: false,
};

/**
 * 제네릭 타입 별칭
 * 🏷 제네릭 인터페이스와 문법만 다르지 거의 비슷함
 */

type Map2<V> = {
  [key: string]: V;
};

let stirngMap2: Map2<string> = {
  key: "string1",
  key2: "string2",
};

/**
 * 언제 사용할 수 있나?
 * 제네릭 인터페이스 활용 예시
 * -> 유저 관리 프로그램
 * -> 유저 구분 : 학생 유저 / 개발자 유저
 */

interface Student {
  type: "student";
  school: string;
}

interface Developer {
  type: "developer";
  skill: string;
}

interface User<T> {
  name: String;
  profile: T;
}

function goToSchool(user: User<Student>) {
  // type이 잘좁혀지기때문에 타입좁히기가 필요없다
  //   if (user.profile.type !== "student") {
  //     console.log("잘 못 오셨습니다");
  //     return;
  //   }
  const school = user.profile.school;
  console.log(`${school}로 등교 완료`);
}

// goToSchool(developerUser); [ERR:: 정확한 타입좁히기로 해당함수 오류]
const developerUser: User<Developer> = {
  name: "이정환",
  profile: {
    type: "developer",
    skill: "TypeScript",
  },
};

const studentUser: User<Student> = {
  name: "홍길동",
  profile: {
    type: "student",
    school: "모모대학교",
  },
};

/**
 * 💡 제네릭 인터페이스를 이용하면 비교적 코드를 깔끔하게
 * 그리고 타입들의 유형을 깔끔하게 분리 해 줄수 있어서
 * 굉장히 유용하게 사용할 수 있다
 */
