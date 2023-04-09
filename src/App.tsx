import { useState } from "react";
import "./App.css";
import Input from "./components/Input";
import TodoList from "./components/TodoList";
// |
type Todos = {
  id: number;
  todo: string;
  isDone: boolean;
};

function App() {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todos[]>([]);

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if (todo) {
      setTodos([...todos, { id: Date.now(), todo: todo, isDone: false }]);
      setTodo("");
    }
  };
  console.log(todos);
  return (
    <div className="App">
      <span className="heading">TODO APP</span>
      <Input todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
      <TodoList todos={todos} setTodos={setTodos} />
      
    </div>
  );
}

export default App;
