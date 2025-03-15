// enum 타입
// 여러가지 값들에 각각 이름을 부여해 열거해두고 사용하는 타입
// 타입스크립트에서만 특별히 제공되는 새로운 타입

/**
 * 💡 개발을 하다보면 role type의 번호가 0번이 관리자인지
 *    1번이 일반유저인지 헷갈릴때가 있다. 이럴때 enum타입을 이용하면 좋다!
 */

/** 🔑 숫자를 입력하지않아도, 자동으로 위에서부터 0 , 1, 2 번이 할당됨
 *    위에 멤버를[ADMIN]을 10으로 써주게 되면 자동으로 아래 멤버들은 +1씩 할당이돼서 11, 12가 할당된다.
 *    위에 멤버를 값을 할당해주지 않고, [USER]를 11로 할당하게 되면 0, 11, 12가 할당된다.
 *    따라서 enum은 숫자를 자동으로 할당시킬 수도 있고 직접 시작하는 숫자를 지정해 줄수도 있다.
 *    숫자가 할당된 이넘을 숫자형 이넘이라고 부른다.
 *    enum을 정의할때 = 를 쓰지않음
 */
enum Role {
  ADMIN = 0,
  USER = 1,
  GUEST = 2,
}

/**
 * 참고로, enum은 컴파일해도 사라지지않음
 */
enum Language {
  korean = "ko",
  english = "en",
}

const user1 = {
  name: "이정환",
  role: Role.ADMIN,
  lanugage: Language.korean,
};

const user2 = {
  name: "홍길동",
  role: Role.USER,
};
const user3 = {
  name: "아무개",
  role: Role.GUEST,
};

console.log(user1, user2, user3);
