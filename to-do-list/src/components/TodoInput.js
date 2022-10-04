import { useState } from "react";

const TodoInput = ({ setTodos }) => {
	const [todoInput, setTodoInput] = useState("");
	const addTodo = () => {
		// edge case: input is empty string or some white spaces
		if (!todoInput.trim()) {
			//没有任何输入，或者输入为空格，则置空
			setTodoInput("");
			return;
		}

		const newTodo = {
			content: todoInput,
			isCompleted: false,
		};

		setTodos((prev) => {
			return [...prev, newTodo];
		});
	};
	return (
		<div>
			<input
				type="text"
				value={todoInput}
				onChange={(event) => setTodoInput(event.target.value)}
			/>
			<button onClick={addTodo} className="btn-normal">
				Add Todo
			</button>
		</div>
	);
};

export default TodoInput;

// control component: 所有值的变更都跟useState相关，一个闭环
