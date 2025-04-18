import { useEffect, useRef, useState } from "react";
import "./App.css";
import Editor from "./components/Editor";
import TodoItem from "./components/TodoItem";
import { Todo } from "./types";

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const idRef = useRef(0);

  const onClickAdd = (text: string) => {
    setTodos([
      ...todos,
      {
        id: idRef.current++,
        content: text,
      },
    ]);
  };

  const onClickDelete = (id: number) => {
    const todoList = todos.filter((todo) => todo.id !== id);
    setTodos(todoList);
  };

  useEffect(() => {
    console.log(todos);
  }, [todos]);

  return (
    <div className="App">
      <h1>Todo</h1>
      <Editor onClickAdd={onClickAdd}>
        <div>추가</div>
      </Editor>
      {todos.map((todo) => (
        <TodoItem
          id={todo.id}
          content={todo.content}
          onClickDelete={onClickDelete}
        />
      ))}
    </div>
  );
}

export default App;
