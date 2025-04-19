import { ReactElement, useContext, useState } from "react";
import { TodoDispatchContext, useTodoDispatch } from "../App";

interface Props {
  children?: ReactElement;
}

const Editor = (props: Props) => {
  // const dispatch = useContext(TodoDispatchContext);
  // 이렇게 불러오면 dispatch가 널일수도 있기때문에 커스텀훅 이용하여 부르기
  const dispatch = useTodoDispatch();

  // 초기값으로 설정할 값이 없는경우 변수타입을 직접 설정해줘야한다.
  // const [text, setText] = useState<string>();

  // useState는 초기 값으로 전달한 인수의 타입에 따라 state 변수와 state변화 함수의 타입을 자동으로 추론해줌 [제네릭 함수]
  const [text, setText] = useState("");

  // 미리 정의된 이벤트 객체 타입 사용
  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const onClickAdd = () => {
    dispatch.onClickAdd(text);
    setText("");
  };

  return (
    <div>
      <input
        value={text}
        onChange={onChangeInput}
        onKeyDown={(e) => {
          if (e.key === "Enter") onClickAdd();
        }}
      />
      <button onClick={onClickAdd}>{props.children}</button>
    </div>
  );
};

export default Editor;
