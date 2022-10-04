import "./styles/todo-header.css";

const TodoHeader = ({ headerTextContent = "" }) => {
	return <h1 className="todo-header">{headerTextContent}</h1>;
};

export default TodoHeader; // 默认方式输出，可以使用任意名字import, default export 只能export 一个 component, regular export 可以export 多个
