import { Todo } from "../types";

interface Props {
  todos: Todo[];
  deleteTodo: (id: number) => void;
}

const List = (props: Props) => {
  return (
    <div>
      <ul>
        {props.todos.map((todo) => (
          <div className="todoList">
            <li>{todo.content}</li>
            <button onClick={() => props.deleteTodo(todo.id)}>삭제</button>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default List;
