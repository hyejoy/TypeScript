/**
 * 제네릭 클래스
 */

class NumberList {
  constructor(private list: number[]) {}

  push(data: number) {
    this.list.push(data);
  }

  pop() {
    return this.list.pop();
  }
  print() {
    console.log(this.list);
  }
}

const numberList = new NumberList([1, 2, 3]);
numberList.pop();
numberList.push(4);

numberList.print(); // [1,2,4]

/**
 * 🤔 String List도 필요하다면?
 */

class GenericList<T> {
  constructor(private list: T[]) {}

  push(value: T) {
    this.list.push(value);
  }

  pop() {
    this.list.pop();
  }

  print() {
    console.log(this.list);
  }
}

const stringList = new GenericList(["hi", "hello", "mello"]);

stringList.pop();
stringList.push("ming");
stringList.print();

/**
 * 제네릭 클래스는, 제네릭 Interface나 제네릭 Type 변수와 다르게
 * 클래스의 생성자를 호출할 때 , 생성자의 인수로 전달하는 값을 기준으로 타입 변수에 타입을 추론
 * 따라서, 타입을 반드시 명시해 주지않아도 된다.
 * const stringList = new GenericList<string>(["hi,hello"]); <string>생략 가능
 */
