/**
 * extends ..
 * 인터페이스 확장 [ 상속 ]
 * 💡 인터페이스는 객체 타입이면 다 확장 할 수 있다.
 */

// interface 말고 type이여도 확장 가능

interface Animal {
  name: string;
  age: number;
}

// Animal의 프로퍼티 + isBark 프로퍼티 객체 타입으로 정의됨
// 💡 상속받는 인터페이스에서 동일한 프로퍼티를 재정의 할 수 있음
//    단 원본타입의 서브타입이여야만 함.
interface Dog extends Animal {
  isBark: boolean;
}

const dog: Dog = {
  name: "수수",
  age: 4,
  isBark: true,
};

interface Cat extends Animal {
  isScratch: boolean;
}

interface Chicken extends Animal {
  isFly: boolean;
}

/**
 * 다중확장
 */

interface DogCat extends Dog, Cat {}

const dogCat: DogCat = {
  name: "개냥이",
  age: 1,
  isBark: true,
  isScratch: true,
};
