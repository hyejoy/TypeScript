/**
 * ✅ keyof 연산자
 * : 특정 객체 타입으로부터 프로퍼티 키들을 유니온 스트링타입으로 추출
 */

interface Person {
  name: string;
  age: number;
}

/**
 * key의 값을 리터럴스트링 유니온 타입으로 받게 되면, 유지보수가 힘들어짐
 */
function getPropertyKey(person: Person, key: "name" | "age") {
  return person[key];
}

const person: Person = {
  name: "이정환",
  age: 27,
};

getPropertyKey(person, "name"); // 이정환

// 🤔 어떻게 고쳐야할까?
// key of 사용
// ==> person 객체 타입의 모든 프로퍼티의 키를 union 타입으로 추출 ---> "name" | "age"

/**
 *  💡 keyof 연산자는 무조건 타입에만 사용할 수 있는 연산자임!! keyof person 으로 하면 오류남
 */

function getPropertyKeys(person: Person, key: keyof Person) {
  return person[key];
}

getPropertyKeys(person, "name");

/**
 * 💡 typeof 연산자는 TS에서 특별히 타입을 정의할 때 사용하면 동작이 다르게 바뀐다.
 */

type Person1 = typeof person; // Person 으로 추론

// 응용
function getPropertyKey2(person: Person, key: keyof typeof person) {
  return person[key];
}

getPropertyKey2(person, "age");
