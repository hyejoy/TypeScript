import { useState } from "react";
import { useTodoDispatch } from "../App";

const Editor = () => {
  const dispatch = useTodoDispatch();

  const [todo, setTodo] = useState("");
  const inputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodo(e.target.value);
  };

  const onClick = () => {
    dispatch.addTodo(todo);
    setTodo("");
  };

  return (
    <>
      <input
        value={todo}
        onChange={inputChange}
        onKeyDown={(e) => {
          if (e.key === "Enter") onClick();
        }}
      />
      <button onClick={onClick}>추가</button>
    </>
  );
};

export default Editor;
