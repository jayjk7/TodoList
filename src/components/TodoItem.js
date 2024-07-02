import React from 'react';
const TodoItem = ({ todo, toggleTodo }) => {
return (
<li
style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
onClick={toggleTodo}
>
{todo.text}
</li>
);
};
export default TodoItem;
