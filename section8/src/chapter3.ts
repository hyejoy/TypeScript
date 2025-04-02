/**
 * ✅ 맵드 타입 [Mapped Type] ⭐⭐⭐⭐⭐
 * : 기존의 객체타입을 기반으로 새로운 객체 타입을 만드는 마법같은 문법!
 *   ⚠⚠⚠⚠ 맵드타입은 인터페이스에서는 사용불가능임
 */

interface User {
  id: number;
  name: string;
  age: number;
}

// 한명의 유저정보를 불러오는 기능
function fetchUser(): User {
  //.. 기능
  return {
    id: 1,
    name: "이정환",
    age: 27,
  };
}

// 한명의 유저정보를 수정
function updateUser(user: User) {
  //.. 수정하는 기능
}

// 변경되는 값만 프로퍼티에 담아서 보내고 싶어요.
updateUser({
  id: 1,
  name: "이정환",
  age: 25,
});

// 아니 그렇다구 이렇게 옵셔널 프로퍼티로 다 만들어줘야돼? NO!!
interface test {
  id?: number;
  name?: string;
  age?: number;
}

type PertialUser = {
  // 인덱스 시그니처와 다르게 : 대신 in을 사용하고,
  // 우측엔 value 타입을 정의하는 부분에서 인덱시드 엑세스 타입
  // 맵드 프로퍼티에 ? 붙히면 전부다 선택적 프로퍼티로 바뀜
  [key in keyof User]?: User[key];
};

// [key in "id" | "name" | "age"] = User[key];
// {
//     id : User["id"] -> number
//     name: User["name"] -> string
//     age: User["age"] -> number
// }

type BooleanUser = {
  [key in "id" | "name" | "age"]: boolean;
};

// fetchUser함수가 읽기 전용인 객체를 반환해야된다면
type ReadOnlyUser = {
  readonly [key in keyof User]: User[key];
};
