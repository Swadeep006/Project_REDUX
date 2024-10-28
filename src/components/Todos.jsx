import { useDispatch, useSelector } from "react-redux";
import { removeTodo } from "../features/todo/slice";

function Todos() {
  const todos = useSelector((state) => state.todos.todos);
  const dispatch = useDispatch();

  return (
    <>
      <div className="flex justify-center mt-2 border border-black">Todos</div>
      <ul className="list-none gap-2" >
        {todos.map((todo) => (
          <li key={todo.id} className="flex justify-between items-center">
            <div className="text-black">{todo.text}</div>
            <button
              onClick={() => dispatch(removeTodo(todo.id))}
              className="border border-red-500 text-red-500"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Todos;
