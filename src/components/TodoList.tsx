import "./Input.css";
import TodoCard from "./TodoCard";

type Todos = {
  id: number;
  todo: string;
  isDone: boolean;
};

type Props = {
  todos: Todos[];
  setTodos: React.Dispatch<React.SetStateAction<Todos[]>>;
};

export default function TodoList({ todos, setTodos }: Props) {
  return (
    <div className="todos">
      {todos.map((todo) => (
        <TodoCard todo={todo} key={todo.id} todos={todos} setTodos={setTodos} />
      ))}
    </div>
  );
}
