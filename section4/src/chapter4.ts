/**
 * ✅ 사용자 정의 타입 가드
 * 함수를 이용해 입맛대로 타입 가드를 만드는 문법
 */

type Dog = {
  name: string;
  isBark: boolean;
};

type Cat = {
  name: string;
  isScratch: boolean;
};

type Animal = Dog | Cat;

/**
 * 서로소 유니온 타입을 만들지 못하는 상황이라고 가정했을때 유용하게 쓸 수 있다.
 * 반환값이 true 인 경우 animal 은 Dog 타입이다. 를 뜻함
 */

function isDog(animal: Animal): animal is Dog {
  // 타입단언을 사용
  return (animal as Dog).isBark !== undefined;
}

function isCat(animal: Animal): animal is Cat {
  return (animal as Cat).isScratch !== undefined;
}

function warning(animal: Animal) {
  if (isDog(animal)) {
    console.log(`${animal} 타입이 Dog 타입으로 추론되네요.🐶`);
  } else if (isCat(animal)) {
    console.log(`${animal} 타입이 Cat 타입으로 추론되네요.🐱`);
  }
}
