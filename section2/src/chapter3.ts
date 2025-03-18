// object
let user1: Object = {
  id: 1,
  name: "이정환",
};

/**
 * typescript 에 object라는 이 type은 그냥 값이
 * 객체다 라는 정보 외에는 아무런 정보도 없는 타입이기 때문에
 * 객체의 프로퍼티나 메서드에 뭐가 있는지 이 타입은 알수가 없다.
 * 쉽게말하면, 변수의 타입을 오브젝트로 지정한다는 것은 변수는 객체긴 한데 이상은 모른다. 라는뜻
 */

/** 💡 해결방법 => 객체 리터럴 타입
 * 구조를 기준으로 타입을 정의한다. 이런 타입스크립트 특징을 구조적 Type시스템이라고 함
 *
 */
let user: {
  // 🎇 있어도,없어도 되는값은 속성값에 ? 를 붙히면 된다. [선택적(Optional) 프로퍼티]
  id?: number;
  name: string;
} = {
  id: 1,
  name: "이정환",
};

user = {
  name: "홍길동",
};

// 🎇 절대 수정되면 안되는 프로퍼티가 있다면 readonly 키워드를 붙여서 읽기 전용 프로퍼티로 변경
let config: {
  readonly apiKey: string;
} = {
  apiKey: "MY API KEY",
};
