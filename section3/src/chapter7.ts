/**
 * 타입 좁히기
 * 조건문 등을 이용해 넓은 타입에서 좁은타입으로
 * 타입을 상황에 따라 좁히는 방법
 */

/**
 * 🤔 왜 필요할까?
 *      ✅ 매개변수에 여러가지 타입의 값들이 들어올 수 있고, 이렇게 함수 내부에서는 값의 타입에 따라서
 *         각각 다른 동작을 시키는 범용적인 함수들을 구현할때 씀!
 */

// 매개변수 value => number : toFixed
//                => stirng : toUpperCase
//                => Date : getTime
function func1(value: number | string | Date | null) {
  value; // string, number union type으로 추론
  // 타입 가드
  if (typeof value === "number") {
    console.log(value.toFixed()); // number로 추론
  } else if (typeof value === "string") {
    console.log(value.toUpperCase()); //  string 추론
  } else if (typeof value === "object") {
    // ⚠ null 값에 typeof 를 하면 object를 반환함!
    console.log("Date도, null 도 여기에 포함돼요.");
  }
}

/**
 * 🤔 Date인 경우는 타입가드 어떻게 처리하지 ?
 *      ✅ instanceof 사용!
 *      > A instanceof B  [ A의 타입이 B타입이야? ]
 *       즉, A 가 B 클래스의 인스턴스야? 라고 묻는것!
 *
 * 🤔 직접 type을 명시한 Parson 같은 경우는 타입가드 어떻게 처리하지?
 *      ✅  in 연산자 사용!
 *      > A in B [B라는 값에 A라는 프로퍼티가 존재하니? ]
 *
 */

type Person = {
  name: string;
  age: number;
};

function func2(value: string | Date | null | Person) {
  if (typeof value === "string") {
    console.log(value.toUpperCase());
  } else if (value instanceof Date) {
    value.getTime();
  } else if (value && "age" in value) {
    // Person Type으로 좁혀짐
    // null 방지를 위해 value 가 있음을 조건문에 서술함.
    console.log(value.name);
  }
}
