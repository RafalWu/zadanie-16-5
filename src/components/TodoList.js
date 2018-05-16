import React from 'react';
import Todo from './Todo'

const TodoList = props => {

	return (
		<ul className={style.TodoList}>{todoListItems}</ul>
	)
}



export default TodoList;
