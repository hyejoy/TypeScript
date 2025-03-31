/**
 * 프로미스
 *
 * 프로미스는 리졸브나 리젝트를 호출해서 전달하는 비동기의
 * 작업의 결과값을 자동으로 출현할수있는 기능을 가지고 있지않아서 unknown으로 추론함
 *
 * Generic을 활용해서 Promise 객체의 타입을 정의하는 방법에 대해 살펴보자
 */

// 비동기의 결과값이 number임을 알려줌
const promise = new Promise<number>((resolve, reject) => {
  setTimeout(() => {
    resolve(20);
    reject("reject의 인수타입은 선택적 옵셔널이며, any타입 넣을수 있음");
  }, 3000);
});

promise.then((res) => {
  // res number타입으로 추론됨
  console.log(res * 10);
});

promise.catch((err) => {
  // err타입은 any로 떨어지므로 타입좁히기를 이용한다.
  if (typeof err === "string") {
    console.log(err);
  }
});

/**
 * 💡 정리
 * promise는 제네릭 클래스를 기반으로 타입이 선언되어 있기 때문에,
 * 타입변수로 비동기 처리의 결과 값의 타입을 정의해 줄수있지만,
 * reject, 즉 실패 했을때의 타입은 정해 줄 수 없다.
 *
 * 추가적으로 타입 변수 정의를 빼먹으면 기본적으로는 비동기 작업 처리의 결과값이
 * unknown타입으로 추론된다.
 */

/**
 * 프로미스를 반환하는 함수의 타입을 정의
 */

interface Post {
  id: number;
  title: string;
  content: string;
}

/**방법 1 Pormise에 제네릭 타입변수 선언 */
function fetchPost() {
  return new Promise<Post>((resolve, reject) => {
    setTimeout(() => {
      resolve({
        id: 1,
        title: "게시글 제목",
        content: "게시글 내용",
      });
    }, 3000);
  });
}

/** 함수의 반환값으로 Promise<Post>로 설정 ✅ 조금 더 이 방식을 추천함
 *  이방식을 더 추천하는 이유는, 협업의 관점에서 보면 동료들이 코드를 볼 때 함수 선언 부분만
 *  보고도 FetchPost 함수는 프로미스로 Post 타입을 반환함을 바로 알수있기 때문에
 *  협업의 입장에서 가독성이 좋음
 */
function fetchPost2(): Promise<Post> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        id: 1,
        title: "게시글 제목",
        content: "게시글 내용",
      });
    }, 3000);
  });
}

const postRequest = fetchPost();
postRequest.then((res) => {
  console.log(`${res.id}의 제목은 ${res.title} 의 내용은${res.title}`);
});
