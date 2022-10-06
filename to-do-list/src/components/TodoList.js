import { useSelector } from "react-redux"; // 帮助我们选择 state（数据）的全部或者部分
import TodoItem from "./TodoItem";

// key 不能destruct 出来， 使用 map 一定要 给一个key，为了track变化
const TodoList = () => {
	const todos = useSelector((state) => state);
	const todoList = todos.map(({ content, isCompleted }, index) => {
		return (
			<TodoItem
				key={`${content}-${index}`}
				content={content}
				isCompleted={isCompleted}
				index={index}
				// setTodos={setTodos}
			/>
		);
	});
	return <ul>{todoList}</ul>;
};

export default TodoList;
