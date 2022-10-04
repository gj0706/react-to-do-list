import TodoItem from "./TodoItem";

// key 不能destruct 出来， 使用 map 一定要 给一个key，为了track变化
const TodoList = ({ todos, setTodos }) => {
	const todoList = todos.map(({ content, isCompleted }, index) => {
		return (
			<TodoItem
				key={`${content}-${index}`}
				content={content}
				isCompleted={isCompleted}
				index={index}
				setTodos={setTodos}
			/>
		);
	});
	return <ul>{todoList}</ul>;
};

export default TodoList;
