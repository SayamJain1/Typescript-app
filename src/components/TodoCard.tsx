import React, { useEffect, useRef, useState } from "react";
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
  const inputRef = useRef<HTMLInputElement>(null);
  const [edit, setEdit] = useState<boolean>(false);
  const [editValue, setEditValue] = useState<string>(todo.todo);

  useEffect(() => {
    inputRef.current?.focus();
  });

  const handleDone = (id: number) => {
    setTodos(todos.map((t) => (t.id === id ? { ...t, isDone: !t.isDone } : t)));
  };
  const handleDelete = (id: number) => {
    setTodos(todos.filter((t) => t.id !== id));
  };

  const handleEdit = (e: React.FormEvent, id: number) => {
    e.preventDefault();

    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, todo: editValue } : todo
      )
    );

    setEdit(false);
  };
  return (
    <form className="todos-single" onSubmit={(e) => handleEdit(e, todo.id)}>
      {edit ? (
        <input
          ref={inputRef}
          value={editValue}
          onChange={(e) => setEditValue(e.target.value)}
          className="todos-single--text"
        />
      ) : todo.isDone ? (
        <s className="todos-single--text">{todo.todo}</s>
      ) : (
        <span className="todos-single--text">{todo.todo}</span>
      )}

      <div>
        <span
          title="Edit"
          className="icon"
          onClick={() => {
            if (!edit && !todo.isDone) {
              setEdit(!edit);
            }
          }}
        >
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
