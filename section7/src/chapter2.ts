/**
 * map 메서드
 */

const arr = [1, 2, 3];
arr.map((item) => item * 2);

function map<T>(arr: T[], callback: (item: T) => T) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(callback(arr[i]));
  }

  return result;
}

/**
 * it은 arr의 type에따라 결정됨.,
 * 예시로 arr이 string[]이라면 it도 string 이여야함
 */
map(arr, (it) => it * 2);
map(["hi", "hello"], (it) => it.toUpperCase());
// map(["hi", "hello"], (it) => parseInt(it)); [ERR ::: TYPE ERROR]

/**
 * 현재는 arr의 type에 따라 결과값이 도출되지만, 영향없이 개발하고싶다면?
 */

function map1<T, U>(arr: T[], callback: (item: T) => U) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(callback(arr[i]));
  }

  return result;
}
map1(["hi", "hello"], (it) => parseInt(it)); //

/**
 * forEach
 */

const arr2 = [1, 2, 3];
arr2.forEach((it) => console.log(it));

function forEach<T>(arr: T[], callback: (value: T) => void) {
  for (let i = 0; i < arr.length; i++) {
    callback(arr[i]);
  }
}

forEach(arr2, (it) => {
  console.log(it.toFixed()); // it 이 number타입으로 추론
});

forEach(["123", "456"], (it) => {
  console.log(it); // it 이 string타입으로 추론
});
