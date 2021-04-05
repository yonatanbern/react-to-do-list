import React from 'react'
import Todo from './Todo';

function TodoList({todos, removeTodo, toggleTodo}) {
    return (
        <div>
            {todos.map((todo, i) => (
          <Todo
            key={i}
            index={i}
            todo={todo}
            removeTodo={removeTodo}
            toggleTodo={toggleTodo}
          />
        ))}
        </div>
    )
}

export default TodoList
