/**
 * 첫번째 사례
 * 매개변수의 타입이 다른경우, 타입을 여러개 선언할 수 있따.
 */

function swap<T, U>(a: T, b: U) {
  return [b, a];
}

const [a, b] = swap(1, "2");

/**
 * 두번째 사례
 */

function returnFirstValue<T>(data: T[]) {
  return data[0];
}

let num = returnFirstValue([0, 1, 2]); //0
let str = returnFirstValue([1, "hello", "hi"]); //str이 String | Number 타입으로 추론됨

/**
 * 🤔 str이 number로 추론되게 하고싶은데?
 *     -> 튜플사용!
 */

function returnFstValue<T>(data: [T, ...unknown[]]) {
  return data[0];
}

let str1 = returnFstValue([0, true, "string"]); // number로 추론됨

/**
 * 세번째 사례
 * T는 확장하는 타입인데, number 타입의 length 프로퍼티를 가지고 있는 객체로 확장하는것으로 제한.
 */

function getLength<T extends { length: number }>(data: T) {
  return data.length;
}

let var1 = getLength([1, 2, 3]); //3
let var2 = getLength("12345"); //5
let var3 = getLength({ length: 19 }); //19
// let var4 = getLength(10);    [::ERR Number타입은 length프로퍼티가 없어서 에러 발생]
