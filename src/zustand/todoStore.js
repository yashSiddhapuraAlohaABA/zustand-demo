import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

const useTodoStore = create(
  devtools(
    persist(
      (set) => ({
        todos: [],
        addTodo: (text) =>
          set((state) => ({
            todos: [...state.todos, { id: Date.now(), text, completed: false }],
          })),
        toggleTodo: (id) =>
          set((state) => ({
            todos: state.todos.map((todo) =>
              todo.id === id ? { ...todo, completed: !todo.completed } : todo
            ),
          })),
        markCompleted: (id) =>
          set((state) => ({
            todos: state.todos.map((todo) =>
              todo.id === id ? { ...todo, completed: true } : todo
            ),
          })),
        removeTodo: (id) =>
          set((state) => ({
            todos: state.todos.filter((todo) => todo.id !== id),
          })),
      }),
      {
        name: "todo-store",
      }
    )
  )
);

export default useTodoStore;
