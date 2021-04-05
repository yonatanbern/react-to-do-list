import React, {useState} from 'react'
import '../App.css';
import Form from './Form';
import TodoList from './TodoList';
import Filterbar from './Filterbar';

function App() {
  const [filterDisplay, setFilterDisplay] = useState("all")
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
    // return todos.filter(...)
  }

  return (
    <div >
      <header className="App-header">
        <p>Todo List</p>
        
        <Form addTodo={addTodo} />
        <TodoList todos={todos} removeTodo={removeTodo} toggleTodo={toggleTodo} />

      <Filterbar originList={todos}/>
      </header>
    </div>
  );
}

export default App;
