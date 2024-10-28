import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [{ id: 1, text: "helloworld" }]
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(),
        text: action.payload,
        rank: state.todos.length,
      };
      state.todos.push(todo);
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    updateTodo: (state, action) => {
      const index = state.todos.findIndex((todo) => todo.id == action.payload);
      if (index !== -1) {
        state.todos[index].text = action.payload.text;
      }
    },
    rankTodo: (state, action) => {
      const { id, rank } = action.payload;

      const targetIndex = state.todos.findIndex((todo) => todo.id === id);

      if (targetIndex !== -1) {
        const rankIndex = state.todos.findIndex((todo) => todo.rank === rank);

        if (rankIndex !== -1) {
          const tempRank = state.todos[targetIndex].rank;
          state.todos[targetIndex].rank = state.todos[rankIndex].rank;
          state.todos[rankIndex].rank = tempRank;

          [state.todos[targetIndex], state.todos[rankIndex]] = [
            state.todos[rankIndex],
            state.todos[targetIndex],
          ];
        } else {
          state.todos[targetIndex].rank = rank;
        }
      }
    },
  },
});

export const { addTodo, removeTodo, updateTodo } = todoSlice.actions;
export default todoSlice.reducer;
