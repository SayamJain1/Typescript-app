// import { useEffect, useState } from "react";
// import "./App.css";
// import Input from "./components/Input";
// import TodoList from "./components/TodoList";
// // |
// type Todos = {
//   id: number;
//   todo: string;
//   isDone: boolean;
// };

// // getting LS data
// const lsData = () => {
//   let data = localStorage.getItem("TODOS");
//   if (data) {
//     return JSON.parse(localStorage.getItem("TODOS"));
//   } else {
//     return [];
//   }
// };

// function App() {
//   const [todo, setTodo] = useState<string>("");
//   const [todos, setTodos] = useState<Todos[]>(lsData());

//   useEffect(() => {
//     localStorage.setItem("TODOS", JSON.stringify(todos));
//   }, [todos]);

//   const handleAdd = (e: React.FormEvent) => {
//     e.preventDefault();
//     if (todo) {
//       setTodos([...todos, { id: Date.now(), todo: todo, isDone: false }]);
//       setTodo("");
//     }
//   };
//   console.log(todos);
//   return (
//     <div className="App">
//       <span className="heading">TODO APP</span>
//       <Input todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
//       <TodoList todos={todos} setTodos={setTodos} />
//     </div>
//   );
// }

// export default App;

import { useEffect, useState } from "react";
import "./App.css";
import Input from "./components/Input";
import TodoList from "./components/TodoList";

type Todos = {
  id: number;
  todo: string;
  isDone: boolean;
};

const lsData = () => {
  let data = localStorage.getItem("TODOS");
  if (data) {
    return JSON.parse(data);
  } else {
    return [];
  }
};

function App() {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todos[]>(lsData());

  useEffect(() => {
    localStorage.setItem("TODOS", JSON.stringify(todos));
  }, [todos]);

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
