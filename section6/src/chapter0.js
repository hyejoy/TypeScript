/**
 * 클래스
 */

let studentA = {
  name: "이정환",
  age: 27,
  grade: "A+",
  study() {
    console.log("열심히 공부 함");
  },
  introduce() {
    console.log("안녕하세요");
  },
};

// Class는 앞글자 대문자로 시작하는 파스칼 표기법을 사용한다.
// Class 안에서는 , 쉼표를 찍지 않는다.
// 함수도 중괄호만 열고 닫으면 됨
class Student {
  // 필드
  name;
  grade;
  age;

  // 생성자
  constructor(name, grade, age) {
    this.name = name;
    this.grade = grade;
    this.age = age;
  }

  // 메서드
  study() {
    console.log("열심히 공부 함");
  }

  introduce() {
    console.log(`안녕하세요! ${this.name} 입니다.`);
  }
}

//💡 클래스를 호출해서 객체를 생성할 때는 new 키워드를 붙여줘야 한다.
let studentB = new Student("최수수", "A+", 4); // 인스턴스
console.log(studentB);
studentB.study();
studentB.introduce();

class StudentDeveloper extends Student {
  //필드
  favoriteSkill;

  // 생성자
  constructor(name, grade, age, favoriteSkill) {
    super(name, grade, age); // super 클래스 생성자 호출됨
    this.favoriteSkill = favoriteSkill;
  }

  // 메서드
  study() {
    console.log("오버라이딩");
  }

  programming() {
    console.log(`${this.favoriteSkill}로 프로그래밍 함`);
  }
}

const studentDeveloper = new StudentDeveloper("최혜조", "A+", 29, "TypeScript");
console.log(studentDeveloper);
studentDeveloper.programming();
studentDeveloper.study();
