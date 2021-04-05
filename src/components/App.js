import React, { useState } from 'react'
import '../App.css';
import Form from './Form';
import TodoList from './TodoList';

const FILTER_OPTIONS = {
 ALL,
 COMPLETED,
 UNCOMPLETYED
}

function App() {
  const [displayFilter, setDisplayFilter] = useState(FILTER_OPTIONS.ALL)
  const [todos, setTodos] = useState([{
    text: "My first todo",
    isCompleted: false
  },
  {
    text: "My second todo",
    isCompleted: true
  }])

  const addTodo = (text) => {
    const newTodos = [...todos, { text, isCompleted: false }];
    setTodos(newTodos);
  };

  const removeTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  const toggleTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = !newTodos[index].isCompleted;
    setTodos(newTodos);
  };

  const getFilteredTodos = () => {
    let isCompletedFilter;
    if(displayFilter === FILTER_OPTIONS.ALL) {
      return todos;
    }
    else {
      isCompletedFilter= (displayFilter === FILTER_OPTIONS.COMPLETED)
    }
    return todos.filter( todo => todo.isCompleted === isCompletedFilter);
  }

  return (
    <div >
      <header className="App-header">
        <p>Todo List</p>
        
        <Form addTodo={addTodo} />
        <TodoList todos={() => getFilteredTodos()} removeTodo={removeTodo} toggleTodo={toggleTodo} />

      </header>
    </div>
  );
}

export default App;
