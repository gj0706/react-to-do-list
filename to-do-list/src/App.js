import { useEffect } from "react";

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
// 正常流程：1. dispatch an action 
// thunk: 2. intercept the action and execute the async operation/task 拦截异步 action, 执行异步操作， 最终send action to reducer when the async task is completed
// 3. reducer will update the state by type and payload



function App() {
	// const [todos, setTodos] = useState([]); // 设置初始数据库，为空array，慢慢往里加
	// console.log(todos);

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
