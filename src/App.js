import React, { useState } from 'react';
import TodoList from './components/TodoList';
import './App.css';
function App() {
const [todos, setTodos] = useState([]);
const [inputValue, setInputValue] = useState('');
const addTodo = () => {
if (inputValue.trim() !== '') {
setTodos([...todos, { text: inputValue, completed: false }]);
setInputValue('');
}
};
const toggleTodo = index => {
const newTodos = [...todos];
newTodos[index].completed = !newTodos[index].completed;
setTodos(newTodos);
};
return (
<div className="App">
<h1>To-Do List</h1>
<input
type="text"
value={inputValue}
onChange={e => setInputValue(e.target.value)}
/>
<button onClick={addTodo}>Add</button>
<TodoList todos={todos} toggleTodo={toggleTodo} />
</div>
);
}
export default App;
