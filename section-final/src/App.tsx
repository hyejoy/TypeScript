import React, {
  useContext,
  useEffect,
  useReducer,
  useRef,
  useState,
} from "react";
import "./App.css";
import Editor from "./components/Editor";
import TodoItem from "./components/TodoItem";
import { Action, Todo } from "./types";

function reducer(state: Todo[], action: Action) {
  switch (action.type) {
    case "CREATE":
      return [...state, action.data];
    case "DELETE":
      return state.filter((item) => item.id !== action.id);
  }
}
export const ContextTodoDispatch = React.createContext<{
  addTodo: (content: Todo["content"]) => void;
  deleteClick: (id: Todo["id"]) => void;
} | null>(null);

export function useTodoDispatch() {
  const dispatch = useContext(ContextTodoDispatch);
  if (!dispatch) throw new Error("Context is null");
  return dispatch;
}

function App() {
  const [todos, dispatch] = useReducer(reducer, []);
  const idRef = useRef(0);

  const addTodo = (content: Todo["content"]) => {
    dispatch({
      type: "CREATE",
      data: {
        id: idRef.current++,
        content: content,
      },
    });
  };

  const deleteClick = (id: Todo["id"]) => {
    dispatch({
      type: "DELETE",
      id: id,
    });
  };

  useEffect(() => {
    console.log(todos);
  }, [todos]);

  return (
    <div className="App">
      <ContextTodoDispatch.Provider
        value={{
          addTodo,
          deleteClick,
        }}
      >
        <h1>Todo</h1>
        <Editor />
        {todos.map((todo) => (
          <TodoItem
            id={todo.id}
            content={todo.content}
          />
        ))}
      </ContextTodoDispatch.Provider>
    </div>
  );
}

export default App;
