/**
 * 접근제어자 : access modifier
 * 필드나 메소드에 접근할 수 있는 범위를 설정하는 문법
 * [public] [private] [protected]
 */

class Employee {
  private name: string;
  protected age: number;
  position: string;

  constructor(name: string, age: number, position: string) {
    this.name = name;
    this.age = age;
    this.position = position;
  }

  work() {
    console.log("토스에서 일해요 💙");
  }

  // private name 프로퍼티를 바꾸고 싶은경우, 메서드를 통해 변경
  changeName(name: string) {
    this.name = name;
  }
}

const employee = new Employee("최혜조", 29, "developer");
// 객체의 프로퍼티에 접근해서 값을 수정 할 수 도있다.
employee.changeName("최수수");
employee.position = "진돗개";

// 🤔 왜 가능해요?
/**
 * 객체이기 때문이기도 하고, 클래스에 각각의 필드에 접근 제어자가 기본적으로 기본값인 public으로 설정되어 있기 때문이다.
 * public  ▶ 공공의, 즉 다 오픈되어있다라는 뜻
 * private ▶ 사적인
 * protected
 * name 프로퍼티는 private 이기때문에, 값을 수정할 수 없고, employee 클래스 내에서만 엑세스할 수 있다.
 * private는 파생 클래스에서도 접근이 불가능하기 때문에,
 * 파생 클래스에서는 접근이 가능하도록 하고싶으면 protected 접근제어자를 쓰면 된다.
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

  // private 프로퍼티는 파생 클래스에서도 접근안됨
  //   func() {
  //     this.name;
  //   }

  //protected 프로퍼티는 파생 클래스에서는 접근됨
  func(age: number) {
    this.age = age;
  }
}

/**
 * 🏷 생성자에 접근제어자를 붙히면, 필드정의는 생략가능하며,
 *    값도 자동 할당된다.
 */

class TestClass {
  constructor(
    private name: string, // ✅ 자동으로 this.name 선언 + 할당
    protected age: number, // ✅ 자동으로 this.age 선언 + 할당
    public position: string // ✅ 자동으로 this.position 선언 + 할당
  ) {}
}
