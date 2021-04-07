import React, { useState } from 'react'
import '../App.css';
import Form from './Form';
// import TodoList from './TodoList';
// import Filterbar from './Filterbar';

// const FILTER_OPTIONS = {
//  ALL: 0,
//  COMPLETED: 1,
//  UNCOMPLETYED: 2
// }

function App() {
  // const [displayFilter, setDisplayFilter] = useState(FILTER_OPTIONS.ALL)
  const [todos, setTodos] = useState([{
    id: 1,
    text: "My first todo",
    isCompleted: false
  },
  {
    id: 2,
    text: "My second todo",
    isCompleted: true
  }])

  const addTodo = (text) => {
    const newTodos = [...todos, { id: Math.floor(Math.random()*10000), text, isCompleted: false }];
    setTodos(newTodos);
  };

  // const removeTodo = (id) => {
  //   const newTodos = todos.filter(todo => todo.id !== id);
  //   setTodos(newTodos);
  // };

  // const toggleTodo = (id) => {
  //   const newTodos = [...todos];
  //   newTodos.forEach(todo => {
  //     if(todo.id === id) {
  //       todo.isCompleted = !todo.isCompleted
  //     }
  //   })
  //   setTodos(newTodos);
  // };

  // const getFilteredTodos = () => {
  //   let isCompletedFilter;
  //   if(displayFilter === FILTER_OPTIONS.ALL) {
  //     return todos;
  //   }
  //   else {
  //     isCompletedFilter= (displayFilter === FILTER_OPTIONS.COMPLETED)
  //     return todos.filter( todo => todo.isCompleted === isCompletedFilter);
  //   }
  // }

  // const removeCompletedTodos = () => {
  //   const newTodos = todos.filter(todo => todo.isCompleted === false);
  //   setTodos(newTodos);
  // }

  // const hasCompletedTodos = () => {
  //   const completedTodos = todos.filter(todo => todo.isCompleted === true);
  //   return completedTodos.length > 0
  // }

  return (
    <div className="App-body">
        <p>Todo List</p>
      <div className="container">
        
        <Form addTodo={addTodo} />

        
      </div>
    </div>
  );
}

export default App;
