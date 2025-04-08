/**
 * Pick<T, K>
 * -> 뽑다, 고르다
 * -> 객체 타입으로부터 특정 프로퍼티만 딱 골라내는 만들어주는 타입
 */
interface Post {
  title: string;
  tags: string[];
  content: string;
  thumbnailURL?: string;
}

// Post타입으로부터 타이틀, 컨텐츠 프로퍼티만 있는 객체타입으로 새롭게 정의해줌
const legacyPost: Pick<Post, "title" | "content"> = {
  title: "옛날 글",
  content: "옛날 컨텐츠",
};

/**
 * 🤔 직접 Pick 타입을 만들어 보자면?
 */

// 맵드 타입 우측엔 스트링 리터럴로 만든 유니언 타입들만 들어올수 있기때문에
// K에 객체 타입을 제한해줘야한다.
type Pick<T, K extends keyof T> = {
  [key in K]: T[key];
};

/**
 * Omit<T, K>
 * -> 생략하다, 빼다
 * -> 객체타입으로부터 특정 프로퍼티를 제거하는 타입
 */

// 제목이 없는 게시글
// Post 타입에서 title프로퍼티만 제거
const noTitlePost: Omit<Post, "title"> = {
  content: "",
  tags: [],
  thumbnailURL: "",
};

/**
 * 🤔 직접 Omit 타입을 만들어 보자면?
 */

type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
// T = Post, K= 'title'
// Pick<Post, Exclude<keyof Post, 'title' >>
// Pick<Post, Exclude<'title' |'content' |'tags' |'thumbnailURL', 'title' >>
// Pick<Post, 'content'|'tags' |'thumbnailURL'>

/**
 * Record<K, V> ⭐⭐⭐⭐
 * -> 동일한 패턴을 갖는 객체타입을 쉽게 정의할 수 잇음
 * 객체 타입을 새롭게 정의할 때 인덱스 시그니처처럼 유연하지만 그것보다는 조금 더 제한적인 객체타입을 정의할때 사용
 * 실무에서 많이 사용됨
 */

type ThumbnailLegacy = {
  large: {
    url: string;
  };
  medium: {
    url: string;
  };
  small: {
    url: string;
  };
  watch: {
    url: string;
  };
};

// 각 버전마다 새로운 프러퍼티가 추가된다거나 url이 urls로 이름이 바뀌어야한다면..?
// 첫번째 타입변수로는 객체의 property 키를 유니온으로 받고, 두번째 타입변수로는 키들의 value타입을 받음
type Thumbnail = Record<
  "large" | "medium" | "small" | "watch",
  { url: string; size: number }
>;

/**
 * 🤔 직접 Record 타입을 만들어 보자면?
 *    K externds keyof any : 어떤 타입인지는 모르겠는데 아무튼 어떤 객체의 키 타입이야
 */
type Record<K extends keyof any, V> = {
  [key in K]: V;
};
