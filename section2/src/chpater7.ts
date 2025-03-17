// void
// void -> 공허 -> 아무것도 없다.
// void -> 아무것도 없음을 의미하는 타입

function func1(): string {
  return "hello";
}

// return 값이 없는경우 void를 써줌
function func2(): void {
  console.log("hello");
}

/** 오직 undefined만 넣을수 있다.
 * stricNullChecks 옵션 false로 바꾸면 null도 넣을 수 있음.*/
let a: void;
// a = 1;
a = undefined;

// never
// never -> 존재하지 않는
// 불가능한 타입
// 이함수가 뭔가를 반환한다는 것 자체가 모순이고, 절대 불가능할 때
// 절대로 정상적으로 종료될 수 없어서, 함수에 반환값이 있는거 자체가 모순이다 라고 하는 경우
function func3(): never {
  while (true) {}
}

function func4(): never {
  throw new Error();
}

// 변수로 활용하면 그 어떤값도 저장할수 없다.
let b: never;
// a = undefined;
// a = null;
// a = 1;
