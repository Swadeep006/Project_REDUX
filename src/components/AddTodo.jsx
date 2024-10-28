import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todo/slice";

function AddTodo() {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const addTodoHandler = (e) => {
    e.preventDefault();
    if (input.trim() !== "") { // Optional: prevent adding empty todos
      dispatch(addTodo(input));
      setInput("");
    }
  };

  return (
    <form onSubmit={addTodoHandler} className="space-x-3 mt-12 flex justify-center items-center">
      <input
        type="text"
        placeholder="Enter a Todo..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="border border-red-800"
      />
      <button className="border border-black p-1" type="submit">Add Todo</button>
    </form>
  );
}

export default AddTodo;
