import {
  configureStore,
  createAsyncThunk,
  createSlice,
  PayloadAction,
} from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
// import {
//   ActionTypes,
//   ADD_TODO,
//   SET_TODOS,
//   UPDATE_TODO,
//   DELETE_TODO,
//   TOGGLE_TODO,
//   SET_NEWTODO,
// } from "./actions";
import { Todo } from "./types";

const _updateTodo = (todos: Todo[], id: number, text: string): Todo[] =>
  todos.map((todo) => ({
    ...todo,
    text: todo.id === id ? text : todo.text,
  }));

const _toggleTodo = (todos: Todo[], id: number): Todo[] =>
  todos.map((todo) => ({
    ...todo,
    done: todo.id === id ? !todo.done : todo.done,
  }));

const _removeTodo = (todos: Todo[], id: number): Todo[] =>
  todos.filter((todo) => todo.id !== id);

const _addTodo = (todos: Todo[], text: string): Todo[] => [
  ...todos,
  {
    id: Math.max(0, Math.max(...todos.map(({ id }) => id))) + 1,
    text,
    done: false,
  },
];

// function todoReducer(
//   state: Store = {
//     todos: [],
//     newTodo: "",
//   },
//   action: ActionTypes
// ) {
//   switch (action.type) {
//     case SET_TODOS:
//       return {
//         ...state,
//         todos: action.payload,
//       };
//     case SET_NEWTODO:
//       return {
//         ...state,
//         newTodo: action.payload,
//       };
//     case UPDATE_TODO:
//       return {
//         ...state,
//         todos: updateTodo(state.todos, action.payload.id, action.payload.text),
//       };
//     case TOGGLE_TODO:
//       return {
//         ...state,
//         todos: toggleTodo(state.todos, action.payload),
//       };
//     case DELETE_TODO:
//       return {
//         ...state,
//         todos: removeTodo(state.todos, action.payload),
//       };
//     case ADD_TODO:
//       return {
//         ...state,
//         newTodo: "",
//         todos: addTodo(state.todos, state.newTodo),
//       };
//     default:
//       return state;
//   }
// }
interface TodoSliceState {
  todos: Todo[];
  newTodo: string;
}

const initialState: TodoSliceState = {
  todos: [],
  newTodo: "",
};

export const getTotos = createAsyncThunk(
  "todos/getTodos",
  async (url: string) => {
    const res = await fetch(url);
    return (await res.json()) as Todo[];
  }
);

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    setTodos: (state, action: PayloadAction<Todo[]>) => {
      state.todos = action.payload;
    },
    setNewTodo: (state, action: PayloadAction<string>) => {
      state.newTodo = action.payload;
    },
    updateTodo: (state, action: PayloadAction<Todo>) => {
      state.todos = _updateTodo(
        state.todos,
        action.payload.id,
        action.payload.text
      );
    },
    toggleTodo: (state, action: PayloadAction<number>) => {
      state.todos = _toggleTodo(state.todos, action.payload);
    },
    deleteTodo: (state, action: PayloadAction<number>) => {
      state.todos = _removeTodo(state.todos, action.payload);
    },
    addTodo: (state) => {
      state.todos = _addTodo(state.todos, state.newTodo);
      state.newTodo = "";
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getTotos.fulfilled, (state, action) => {
      state.todos = action.payload;
    });
  },
});

const store = configureStore({
  reducer: {
    totos: todoSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();

export const {
  setTodos,
  addTodo,
  deleteTodo,
  toggleTodo,
  updateTodo,
  setNewTodo,
} = todoSlice.actions;
export default store;
