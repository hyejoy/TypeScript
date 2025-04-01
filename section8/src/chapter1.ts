/**
 * 인덱스드 엑세스타입
 * : 객체, 배열, 튜플에 사용가능
 * 객체 타입으로부터 특정 프로퍼티 타입을 쏙 뽑을수 있음
 */

interface Post {
  title: string;
  content: string;
  author: {
    id: number;
    name: string;
    age: number;
  };
}

const post: Post = {
  title: "제목",
  content: "내용",
  author: {
    id: 1,
    name: "이정환",
    age: 27,
  },
};

//작성자의 이름과 이이디를 붙혀서 출력하는 함수가 있다가 가정
// 스트링 리터럴 타입으로 프로퍼티의 타입을 써주면 됨
// 💡 인덱스드 엑세스 타입에서 스트링 리터럴 타입 ["author"] 을 특별히 '인덱스'라고 부른다.
function printAuthorInfo(author: Post["author"]) {
  const result = `${author.id} - ${author.name} - ${author.age}`;
}

//💡 기존 프로퍼티의 타입이 변경되어도 즉시 반영해주기 때문에, 원본 타입이 수정되어도 별도의 수정이 필요없음

/**
 * ✅ 인덱스드 엑세스 타입 사용시 유의해야하는 점
 * 1. 인덱스에 들어가는 문자열은 값이 아니라 타입이다.
 *   따라서 const key = "author"
 *   Post[key] 로 쓰면 오류가남, key는 변수고 값이기 때문이다.
 *   그렇기 때문에 오직 StringLiteralType같은 타입만 들어올 수 있다.
 *
 * 2. author 프로퍼티에서 id의 프로퍼티의 타입만 가지고 오고 싶다고 하면 중첩으로 대괄호를 써서 가져오면 된다.
 */

function getAuthorId(authorId: Post["author"]["id"]) {
  console.log(authorId);
}

// 배열 타입으로부터 특정 요소의 타입을 뽑아오기
type PostList = {
  title: string;
  content: string;
  author: {
    id: number;
    name: string;
    age: number;
  };
}[];

// 배열타입에 대괄호를 써주면, 배열 타입으로부터 하나의 요소의 타입만 가져온다고 이해하면 됨
// PostList[0] 과같이 숫자를 집어넣어도 됨
const post1: PostList[number] = {
  title: "제목",
  content: "내용",
  author: {
    id: 1,
    name: "이정환",
    age: 27,
  },
};

function printAuthorInfo2(author: PostList[number]["author"]) {
  return author.age + author.id + author.name;
}

// 튜플과 함께 사용하는 방법

type Tup = [number, string, boolean];

type Tup0 = Tup[0]; // number
type Tup1 = Tup[1]; // string
type Tup2 = Tup[2]; // boolean

// 튜플은 타입이 고정된 배열이기 때문에 존재하지않는 인덱스의 타입을 추출하려하면 오류발생
// type Typ3 = Type[3]; [::ERR]

// 인덱스에 number 타입을 넣어도됨
// 튜플타입의 최적의 공통 타입을 뽑아 온다.
type TupNum = Tup[number]; // string | number | boolean
