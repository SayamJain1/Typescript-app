import React from "react";
import { AiFillEdit } from "react-icons/ai";
import { AiFillDelete } from "react-icons/ai";
import { MdDone } from "react-icons/md";

type Todos = {
  id: number;
  todo: string;
  isDone: boolean;
};

type Props = {
  todo: Todos;
  todos: Todos[];
  setTodos: React.Dispatch<React.SetStateAction<Todos[]>>;
};
export default function TodoCard({ todo, todos, setTodos }: Props) {
  const handleDone = (id: number) => {
    setTodos(todos.map((t) => (t.id === id ? { ...t, isDone: !t.isDone } : t)));
  };
  const handleDelete = (id: number) => {
    setTodos(todos.filter((t) => t.id !== id));
  };
  return (
    <form className="todos-single">
      {todo.isDone ? (
        <s className="todos-single--text">{todo.todo}</s>
      ) : (
        <span className="todos-single--text">{todo.todo}</span>
      )}
      <div>
        <span title="Edit" className="icon">
          <AiFillEdit />
        </span>
        <span
          title="Delete"
          className="icon"
          onClick={() => handleDelete(todo.id)}
        >
          <AiFillDelete />
        </span>
        <span
          title="Complete"
          className="icon"
          onClick={() => handleDone(todo.id)}
        >
          <MdDone />
        </span>
      </div>
    </form>
  );
}
