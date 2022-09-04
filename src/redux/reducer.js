import { ADD, DELETE } from "./action";

const initialState = {
  todos: [],
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD:
      return {
        todos: [...state.todos, action.todo],
      };
    case DELETE:
      return {
        todos: [...state.todos.filter((todo) => todo.id !== action.id)],
      };
    default:
      return state;
  }
};
