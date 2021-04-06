import React from 'react'
import Todo from './Todo';

function TodoList({todos, removeTodo, toggleTodo}) {
    return (
        <div className="list">
            {todos.map((todo, i) => (
          <Todo
            key={i}
            todo={todo}
            removeTodo={removeTodo}
            toggleTodo={toggleTodo}
          />
        ))}
        </div>
    )
}

export default TodoList
