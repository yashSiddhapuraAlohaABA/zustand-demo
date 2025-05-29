import React, { useState } from "react";
import useTodoStore from "../zustand/todoStore";
import useUserStore from "../zustand/userStore";

const TodoList = () => {
  const [task, setTask] = useState("");
  const [filter, setFilter] = useState("all");
  const { todos, addTodo, toggleTodo, removeTodo, markCompleted } =
    useTodoStore();
  // const { users } = useUserStore();

  // console.log(" : users : ", users);

  const handleAdd = () => {
    if (task.trim()) {
      addTodo(task);
      setTask("");
    }
  };

  const filteredTodos = todos.filter((todo) => {
    if (filter === "completed") return todo.completed;
    if (filter === "incomplete") return !todo.completed;
    return true;
  });

  return (
    <div>
      <h2 className="text-lg font-semibold mb-4">Todo List</h2>
      <div className="mb-4">
        <input
          value={task}
          onChange={(e) => setTask(e.target.value)}
          className="border px-2 py-1 mr-2"
          placeholder="Enter task"
        />
        <button
          onClick={handleAdd}
          className="bg-blue-500 text-white px-4 py-1 rounded"
        >
          Add
        </button>
      </div>
      <div className="mb-4">
        <button
          onClick={() => setFilter("all")}
          className={`mr-2 px-3 py-1 rounded ${
            filter === "all" ? "bg-blue-600 text-white" : "bg-gray-200"
          }`}
        >
          All
        </button>
        <button
          onClick={() => setFilter("completed")}
          className={`mr-2 px-3 py-1 rounded ${
            filter === "completed" ? "bg-blue-600 text-white" : "bg-gray-200"
          }`}
        >
          Completed
        </button>
        <button
          onClick={() => setFilter("incomplete")}
          className={`px-3 py-1 rounded ${
            filter === "incomplete" ? "bg-blue-600 text-white" : "bg-gray-200"
          }`}
        >
          Incomplete
        </button>
      </div>
      <ul className="list-disc pl-5">
        {filteredTodos.map((todo) => (
          <li key={todo.id} className="mb-1">
            <span
              onClick={() => toggleTodo(todo.id)}
              className={`cursor-pointer ${
                todo.completed ? "line-through text-gray-500" : ""
              }`}
            >
              {todo.text}
            </span>
            <button
              onClick={() => removeTodo(todo.id)}
              className="ml-2 text-red-500 hover:underline"
            >
              Remove
            </button>
            {!todo.completed && (
              <button
                onClick={() => markCompleted(todo.id)}
                className="ml-2 text-green-500 hover:underline"
              >
                Complete
              </button>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
