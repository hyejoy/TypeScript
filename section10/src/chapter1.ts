/**
 * 유틸리티 타입
 * 제네릭, 맵드 타입, 조건부 타입 등의
 * 타입 조작 기능을 이용해 실무에서 자주 사용되는 타입을 미리 만들어 놓은것
 */

/**
 * Partial<T>
 * -> 부분적인, 일부분의
 * -> 특정객체 타입의 모든 프로퍼티를 선택적 프로퍼티 바꿔주는 타입
 */

interface Post {
  title: string;
  tags: string[];
  content: string;
  thumbnailURL?: string;
}

// 임시게시글
// Partial을 쓰게 되면 타입 변수로 전달한 타입의 모든 프로퍼티를 선택적
// 프로퍼티로 바꿔줌
const draft: Partial<Post> = {
  title: "제목 나중에 짓자",
  content: "초안....",
};

/**
 * 🤔 직접 Partial 타입을 만들어 보자면?
 */

type Partial<T> = {
  [key in keyof T]?: T[key];
};

/**
 * Required<T>
 * -> 필수의, 필수적인
 * -> 타입변수로 전달한 타입의 모든 프로퍼티를
 *    필수 프로퍼티를 바꿔주는 타입
 */

const withThumbnailPost: Post = {
  title: "한입 타스 후기",
  tags: ["Ts"],
  content: "",
  //   thumbnailURL: "https://....",
};

// thumbnailURL을 선택적 프로퍼티지만 무조건 값이 있어야하는 객체를 만들고 싶을때
const withThumbnailPost2: Required<Post> = {
  title: "한입 타스 후기",
  tags: ["Ts"],
  content: "",
  thumbnailURL: "https://....",
};

/**
 * 🤔 직접 Required 타입을 만들어 보자면?
 * 선택적옵셔널은 ? 이지만, 필수는 -?로 쓰면됨
 */

type Required<T> = {
  [key in keyof T]-?: T[key];
};

/**
 * Readonly<T>
 * -> 읽기 전용 수정 불가
 * -> 특정 객체 타입에서 모든 프로퍼티를 읽기 전용 프로퍼티로 만들어주는 타입
 */

const readonlyPost: Readonly<Post> = {
  title: "보호된 게시글",
  tags: [],
  content: "",
};

// readonlyPost.title = "readonly이므로 수정이 불가능해요";

/**
 * 🤔 직접 ReadOnly 타입을 만들어 보자면?
 */

type Readonly<T> = {
  readonly [key in keyof T]: T[key];
};
