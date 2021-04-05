import React from 'react'

const Todo = ({ index, todo }) => {
    return (
    <div style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}>
        <input type="checkbox" name="isCompleted" value={todo.isCompleted} checked={todo.isCompleted}/>
        {todo.text}
    </div>
    );
  }

  export default Todo