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
 * Never 타입
 */
