import { useTodoDispatch } from "../App";
import { Todo } from "../types";

interface Props extends Todo {}

const TodoItem = (props: Props) => {
  const dispatch = useTodoDispatch();
  const deleteClick = () => {
    dispatch.deleteClick(props.id);
  };
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div>{`${props.id} : ${props.content}`}</div>
      <button onClick={deleteClick}>삭제</button>
    </div>
  );
};

export default TodoItem;
