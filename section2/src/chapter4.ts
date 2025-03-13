/**
 * 💡 타입정의를 마치 변수 처럼 하도록 도와주는 [타입 별칭]이라는 문법과
 * 객체타입을 좀 더 유연하게 정의하도록 도와주는 인덱스 [시그니처] 라는 문법을 학습
 */

/**
 * 타입별칭
 * 타입이 중복될때, 중복코드 발생
 *▶ 타입을 변수처럼 정의해서 사용할 수 있는 타입별칭을 사용
 */

type User = {
  id: number;
  name: string;
  nickname: string;
  birth: string;
  bio: string;
  location: string;
};

let user: User = {
  id: 1,
  name: "이정환",
  nickname: "winterlood",
  birth: "1997.01.07",
  bio: "안녕하세요!",
  location: "부천시",
};

/**
 * 인덱스 시그니처
 *▶ 객체의 키와, 밸류의 규칙을 기준으로 객체의 type을 정의할 수 있는 문법
 */

type CountryCodes = {
  [key: string]: string;
};

let countryCodes: CountryCodes = {
  Korea: "ko",
  UnitedState: "us",
  UnitedKingdom: "uk",
};

// 인덱스 시그니처 타입은 규칙을 위반하지만 않으면 모든 객체를 허용함.
// 따라서, 객체는 아무런 프로퍼티가 없으면, 위반할 프로퍼티가 없기때문에 규칙을
// 위반한것으로 보지않아, 오류 발생X
type CountryNumbersCodes = {
  [key: string]: number;
  Korea: number; //  반드시 Korea라는 Number타입의 프로퍼티가 있어야 된다고 하면 빈객체의 값을 집어넣지 못하게됨
};

let countryNumbersCodes: CountryNumbersCodes = {
  Korea: 410,
  UnitedState: 840,
  UnitedKingdom: 826,
};

/**
 * 밑의 타입은 오류!
 * 인덱스 시그니처를 사용하는 객체 타입에서 추가적인 프로퍼티는 Value의 타입이 인덱스 시그니처의 Value타입과
 * 일치하거나 호환해야된다.
 */

// type testType = {
//   [key: string]: number;
//   Korea: string;
// };
