import React from 'react';
import TodoItem from './TodoItem';
const TodoList = ({ todos, toggleTodo }) => {
return (
<ul>
{todos.map((todo, index) => (
<TodoItem key={index} todo={todo} toggleTodo={() => toggleTodo(index)} />
))}
</ul>
);
};
export default TodoList;