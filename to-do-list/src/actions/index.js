// 实现三个action：add, mod, delete

// 把type 设成constants 避免bug, 一般来说应该新建一个文件装constants

export const ADD_TODO = "ADD";
export const MOD_TODO = "MOD";
export const DEL_TODO = "DEL";
// curried function
export const addTodo = (dispatch) => (content) => {
	//创建一个action 然后dispatch 出去
	dispatch({
		type: ADD_TODO, // 要大写
		payload: {
			content, // 简写，相当于content: content
			isCompeted: false,
		},
	});
};
export const modTodo = (dispatch) => (index) => {
	dispatch({
		type: MOD_TODO, // 要大写
		payload: index,
	});
};
export const delTodo = (dispatch) => (index) => {
	dispatch({
		type: DEL_TODO, // 要大写
		payload: index,
	});
};
