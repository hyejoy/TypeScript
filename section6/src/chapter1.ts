/**
 * 타입스크립트의 클래스
 */

const employee = {
  name: "이정환",
  age: 27,
  position: "developer",
  work() {
    console.log("일해요.");
  },
};

/**
 * 필드 정의 후 오류 해결 방법
 * 1. 초기값을 설정해주거나
 * 2. 옵셔널 프로퍼티를 사용하거나
 * 3. 생성자를 만들어준다.
 */
class Employee {
  // 필드
  name: string = "직원이름"; // 1 초기값을 설정해주거나
  age?: number; // 옵셔널 프로퍼티 설정해주거나
  position: string;

  // 생성자
  // 3. 생성자를 만들어준다.
  constructor(name: string, age: number, positon: string) {
    this.name = name;
    this.age = age;
    this.position = positon;
  }

  // 메서드
  work() {
    console.log("일해요");
  }
}

const employeeA = new Employee("이정환", 27, "개발자");

console.log(employeeA);

/**
 * Class는 Type으로도 활용할 수 있다.
 * 💡 타입스크립트는 구조적 타입시스템을 따르기 때문에 클래스 구조를 통해
 *    클래스의 필드와 메서드가 있으면 해당 Type으로 간주함
 */

const employeeB: Employee = {
  name: "이름",
  age: 20,
  position: "회계사",
  work() {},
};

/**
 * Employee Class의 확장된 Class
 */

class ExecutiveOfficer extends Employee {
  // 필드
  officeNumber: number;

  // 생성자
  constructor(
    name: string,
    age: number,
    positon: string,
    officeNumber: number
  ) {
    super(name, age, positon);
    this.officeNumber = officeNumber;
  }
}

const executiveOfficerA: ExecutiveOfficer = {
  name: "임원1",
  age: 45,
  officeNumber: 1,
  position: "이사",
  work() {},
};

const executiveOfficerB = new ExecutiveOfficer("임원2", 49, "상무", 2);

console.log(executiveOfficerA);
console.log(executiveOfficerB);
