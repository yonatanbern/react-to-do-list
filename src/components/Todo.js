import React from 'react'

const Todo = ({ index, todo, removeTodo, toggleTodo }) => {
    return (
    <div style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}>
        <input type="checkbox" name="isCompleted" value={todo.isCompleted} checked={todo.isCompleted} onClick={() => toggleTodo(index)}/>
        {todo.text}
        <button onClick={() => removeTodo(index)}>X</button>
    </div>
    );
  }

  export default Todo