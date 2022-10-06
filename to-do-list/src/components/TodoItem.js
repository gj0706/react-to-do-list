import { useDispatch } from "react-redux";
import { modTodo, delTodo } from "../actions/index";
import "./styles/todo-item.css";

const TodoItem = ({ content, isCompleted, index, setTodos }) => {
	//1.trigger double click event
	// 2. setTodos change state accordingly
	// 3. updated todos will be passed into TodoItem
	// const modTodo = (index) => {
	// 	setTodos((prev) => {
	// 		return prev.map((todo, i) => {
	// 			if (i !== index) {
	// 				return todo;
	// 			}
	// 			return {
	// 				...todo,
	// 				isCompleted: !todo.isCompleted,
	// 			};
	// 		});
	// 	});
	// };
	// const delTodo = (index) => {
	// 	// 方法 1
	// 	// const todos = [];
	// 	// const newTodos = [...todos.slice(0, index), ...todos.slice(index + 1)];
	// 	// setTodos(newTodos);

	// 	setTodos((prev) => {
	// 		return [...prev.slice(0, index), ...prev.slice(index + 1)]; //把想要删掉的元素的index找到并删除
	// 	});
	// };
	const dispatch = useDispatch();
	return (
		<li className="todo-item">
			<span
				onDoubleClick={() => modTodo(dispatch)(index)}
				className={isCompleted ? "task-done" : "task-incompleted"}
			>
				{content}
			</span>
			<button
				className="btn-normal"
				onClick={() => {
					delTodo(dispatch)(index);
				}}
			>
				Delete
			</button>
		</li>
	);
};

export default TodoItem;
