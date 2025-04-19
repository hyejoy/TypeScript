import { useContext } from "react";
import { TodoStateContext, useTodoDispatch } from "../App";
import { Todo } from "../types";

interface Props extends Todo {}

const TodoItem = (props: Props) => {
  const dispatch = useTodoDispatch();
  const todoState = useContext(TodoStateContext);

  const onClickButton = () => {
    dispatch.onClickDelete(props.id);
  };

  return (
    <div>
      {props.id}번 : {props.content}
      <button onClick={onClickButton}>삭제</button>
    </div>
  );
};

export default TodoItem;
