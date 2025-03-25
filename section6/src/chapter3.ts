/**
 * 인터페이스와 클래스
 */

interface CharacterInterface {
  name: string;
  moveSpeed: number;
  move(): void;
}

class Character implements CharacterInterface {
  /** 💡 인터페이스로 정의하는 필드들은 무조건 public이다. */
  constructor(public name: string, public moveSpeed: number) {}

  move(): void {
    console.log("🚓🚗🚗");
  }
}

const mercy = new Character("메르시", 68);

console.log(mercy);
console.log(mercy.move());
