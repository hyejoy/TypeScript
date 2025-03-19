// 💡 다운캐스팅은 안되고, 업캐스팅만 됨.

/**
 * Unknown 타입 : 모든 타입의 super Type
 */

function UnknownExam() {
  let a: unknown = 1;
  let b: unknown = "hello";
  let c: unknown = true;
  let d: unknown = null;
  let e: unknown = undefined;

  let nuknownVar: unknown;

  /*** 다운캐스팅은 안됨*/
  //   let num:number = unknownVar;
  //   let str:string = unknownVar;
}

/**
 * Never 타입 [공집합]
 * -> 반환할 수 있는 값의 종류가 아무것도 없다라고 설정
 */

function neverExam() {
  function neverFunc(): never {
    while (true) {}
  }

  // 이게 왜 되는걸까 ? 🤔
  // 네버 타입은 모든 타입의 서브 타입이기 때문에 그 어떤 타입의 변수에도 다 값을 넣을 수 있다.
  let num: number = neverFunc();
  let str: string = neverFunc();
  let bool: boolean = neverFunc();

  //  반대는 안됨! 다운캐스팅이기 때문이다.
  // let never1:never = 10;
}

/**
 * void 타입
 * return 값이 없는 타입에 명시
 * void는 undefined의 슈퍼타입이다.
 */

function voidExam() {
  function voidFunc(): void {
    console.log("hi");
    return undefined; // 반환값을 void로 했지만 void 타입은 undefined의 super타입이기때문에 가능
  }

  // 업캐스팅이기 때문에 가능
  let voidVar: void = undefined;

  // 다운캐스팅이기 때문에 불가능
  // let undfinedVar: undefined = voidVar;
}

/**
 * any 타입
 * 타입의 계층도 상에서는 Unknown Type의 Sub Type으로  위치해 있지만,
 * 결론부터 말하면 any타입은 치트키 타입이다.
 * 따라서 Any Type은 타입 계층도를 완벽히 무시한다.
 * [🔑 모든 타입의 슈퍼 타입으로 존재하기도 하고, 모든 타입의 서브 타입으로 존재하기도 한다.(never 제외)]
 */

function anyExam(): any {
  let unknwonVar: unknown;
  let anyVar: any;
  let undefinedVar: undefined;
  let neverVar: never;

  unknwonVar = anyVar;
  //  다운캐스팅도 허용됨
  anyVar = unknwonVar;
  undefinedVar = anyVar;

  // 네버타입은 순수한 공집합이기 때문에 네버타입의 변수에는 그 어떤 타입도 다운캐스팅 할수없다.
  // neverVar = anyVar;
}
