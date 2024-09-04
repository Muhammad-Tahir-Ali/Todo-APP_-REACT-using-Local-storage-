import React, { useState } from "react";
import { useTodo } from "../Contexts";

function TodoForm() {
  const [todo, setTodo] = useState("");
  const { addTodo } = useTodo();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!todo) return;
    addTodo({ todo, completed: false });
    setTodo("");
  };

  return (
    // Todo Form
    <form onSubmit={handleSubmit} className="flex items-center gap-2 ">
      <input
        type="text"
        placeholder="Enter your todo..."
        className="flex-grow px-4 py-2 rounded-l-lg bg-white/20 text-white placeholder-gray-300 focus:outline-none"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button
        type="submit"
        className="bg-green-600 hover:bg-green-500 text-white px-4 py-2 rounded-r-lg transition duration-300"
      >
        Add
      </button>
    </form>
  );
}

export default TodoForm;
