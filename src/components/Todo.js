import React from 'react'

const Todo = ({ todo, removeTodo, toggleTodo }) => {
    return (
    <div style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}>
        <input type="checkbox" name="isCompleted" value={todo.isCompleted} checked={todo.isCompleted} onChange={() => toggleTodo(todo.id)}/>
        {todo.text}
        <button onClick={() => removeTodo(todo.id)}>X</button>
    </div>
    );
  }

  export default Todo