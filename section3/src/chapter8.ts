/**
 * 서로소 유니온 타입
 * 교집합이 없는 타입들로만 만든 유니온 타입을 말함
 */

import { error } from "console";

type Admin = {
  name: string;
  kickCount: number;
};
type Member = {
  name: string;
  ponint: number;
};
type Guest = {
  name: string;
  visitCount: number;
};

type User = Admin | Member | Guest;

// Adming -> {name} 님 현재까지 {kickCount}명 강퇴했습니다.
// Memeber -> {name} 님 현재까지 {point}모았습니다.
// Guest -> {name} 님 현재까지 {visitCount}번 오셨습니다.
function login(user: User) {
  if ("kickCount" in user) {
    // 코드가 이 조건문이 admin에 해당되는건지, member에 해당되는건지 잘 모르겠음 [직관적 X]
    console.log(`${user.name} 님 현재까지 ${user.kickCount}명 강퇴했습니다.`);
  } else if ("point" in user) {
    console.log(`${user.name} 님 현재까지 ${user.point}모았습니다.`);
  } else if ("visitCount" in user) {
    console.log(`${user.name} 님 현재까지 ${user.visitCount}번 오셨습니다.`);
  }
}

/**
 * 어떻게 고칠거야? --> 서로소 유니온 타입으로!
 * type을 리터럴로 정의했기 때문에, 교집합이 없는 집합들로 구성됨
 *
 */

type Admin1 = {
  tag: "ADMIN";
  name: string;
  kickCount: number;
};
type Member1 = {
  tag: "MEMBER";
  name: string;
  point: number;
};
type Guest1 = {
  tag: "GUEST";
  name: string;
  visitCount: number;
};

type User1 = Admin1 | Member1 | Guest1;

function login1(user: User1) {
  switch (user.tag) {
    case "ADMIN": {
      console.log(`${user.name} 님 현재까지 ${user.kickCount}명 강퇴했습니다.`); // Admin 타입으로 좁혀짐
      break;
    }
    case "MEMBER": {
      console.log(`${user.name} 님 현재까지 ${user.point}모았습니다.`); // Member 타입으로 좁혀짐
      break;
    }
    case "GUEST": {
      console.log(`${user.name} 님 현재까지 ${user.visitCount}번 오셨습니다.`); // Guest타입으로 좁혀짐
      break;
    }
  }
}

/**
 * 복습 겸 한가지 더 사례
 */

// 비동기 작업의 결과를 처리하는 객체

type AsyncTask = {
  state: "LOADING" | "FAILED" | "SUCCESS";
  error?: {
    message: string;
  };
  response?: {
    date: string;
  };
};

const loading = {
  state: "LOADING",
};

const failed = {
  state: "FAILED",
  error: {
    message: "ERROR MESSAGE ...",
  },
};

const success = {
  state: "SUCCESS",
  response: {
    date: "DATA",
  },
};

// 로딩 중 -> 콘솔에 로딩중 출력
// 실패 -> 실패: 에러메시지 출력
// 성공 -> 성공: 데이터 출력
function processResult(task: AsyncTask) {
  switch (task.state) {
    case "LOADING": {
      console.log(" 로 딩 중");
      break;
    }
    case "FAILED": {
      console.log(`실패 : ${task.error?.message}`);
      break;
    }
    case "SUCCESS": {
      console.log(`성공 : ${task.response?.date}`);
    }
  }
} // 옵셔널 프로퍼티가 쓰이넹.. 내가 원하는 게 아닌데?... >> AsyncTask 타입을 3가지 타입으로 나누기

type LoadingTask = {
  state: "LOADING";
};
type FailedTask = {
  state: "FAILED";
  error: {
    message: string;
  };
};
type SuccessTask = {
  state: "SUCCESS";
  response: {
    data: string;
  };
};

type allTask = LoadingTask | FailedTask | SuccessTask;

function returnMessage(value: allTask) {
  if (value.state === "LOADING") {
    console.log("laoding...");
  } else if (value.state === "FAILED") {
    console.log(value.error.message);
  } else if (value.state === "SUCCESS") {
    console.log(value.response.data);
  }
}
