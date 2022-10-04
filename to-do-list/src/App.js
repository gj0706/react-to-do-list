import { useState } from "react";

import TodoHeader from "./components/TodoHeader";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

import "./App.css";

/* 数据结构
const sampleData = [
  {
  content: "some todos",
  isCompleted: false,
  },
  {
  content: "some todos",
  isCompleted: false,
  },
];
*/

function App() {
	const [todos, setTodos] = useState([]); // 设置初始数据库，为空array，慢慢往里加
	console.log(todos);
	return (
		<div className="App">
			<TodoHeader headerTextContent="Todo" />
			<hr />
			<TodoInput setTodos={setTodos} />
			<TodoList todos={todos} setTodos={setTodos} />
		</div>
	);
}

export default App;
