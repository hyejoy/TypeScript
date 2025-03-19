/**
 * 기본 타입간의 호환성
 */

let num1: number = 10;
let num2: 10 = 10;

num1 = num2; // 업캐스팅

/**
 * 객체 타입간의 호환성
 * -> 어떤 객체타입을 다른 객체타입으로 취급해도 괜찮은가?
 */

type Animal = {
  name: string;
  color: string;
};

type Dog = {
  name: string;
  color: string;
  breed: string;
};

let animal: Animal = {
  name: "기린",
  color: "yellow",
};

let dog: Dog = {
  name: "수수",
  color: "gold",
  breed: "진도믹스",
};

// 객체타입들도 기본 타입들처럼 서로 슈퍼타입 서브타입 관계를 갖는데
// 객체타입들이 어떤 기준으로 이런 관계를 갖는거냐면 프로퍼티 기준으로 관계를 가짐.
animal = dog;
// dog = animal;

type Book = {
  name: string;
  price: number;
};

type ProgramingBook = {
  name: string;
  price: number;
  skill: string;
};

let book: Book;
let programingBook: ProgramingBook = {
  name: "한 입 크기로 잘라먹는 리엑트",
  price: 33000,
  skill: "react js",
};

book = programingBook;
// programingBook = book; [ 다운캐스팅 불가능 ]

/**
 * 초과 프로퍼티 검사
 * 변수를 초기화하는 값으로 객체 리터럴을 사용하면 발동하는 검사인데,
 * 실제 타입에는 정의해놓지 않은 프로퍼티를 작성하는것을 막는 검사이다.
 */
let book2: Book = {
  name: "한 입 크기로 잘라먹는 리엑트",
  price: 33000,
  //   skill: "react js" [ERROR : 초과 프로프터 검사],
};

/**
 * 변수를 초기화하거나, 매개 변수에 전달할 때에는 객체 리터럴을 사용하면 정해준
 * 프로퍼티만 사용해야하고, 밑의 코드처럼 변수에 담아 사용하면 가능하다.
 */
let book3: Book = programingBook;

function func(book: Book) {}
func({
  name: "한 입 크기로 잘라먹는 리엑트",
  price: 33000,
  // skill: "react js" [ERROR : 초과 프로프터 검사],
});

func(book3);
