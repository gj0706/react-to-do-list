import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../actions/index";

const TodoInput = ({ setTodos }) => {
	const [todoInput, setTodoInput] = useState(""); // 需要保留，不放进 redux
	const dispatch = useDispatch();

	const handleAddTodo = () => {
		// edge case: input is empty string or some white spaces
		if (!todoInput.trim()) {
			//没有任何输入，或者输入为空格，则置空
			setTodoInput("");
			return;
		}

		addTodo(dispatch)(todoInput);
		setTodoInput("");
		// const newTodo = {
		// 	content: todoInput,
		// 	isCompleted: false,
		// };

		// 	setTodos((prev) => {
		// 		return [...prev, newTodo];
		// 	});
	};

	return (
		<div>
			<input
				type="text"
				value={todoInput}
				onChange={(event) => setTodoInput(event.target.value)}
			/>
			<button onClick={handleAddTodo} className="btn-normal">
				Add Todo
			</button>
		</div>
	);
};

export default TodoInput;

// control component: 所有值的变更都跟useState相关，一个闭环
