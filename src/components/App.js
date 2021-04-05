import React, {useState} from 'react'
import '../App.css';
import Todo from './Todo';
// import Form from './Form';

function App() {
  const [todos, setTodos] = useState([{
    text: "My first todo",
    isCompleted: false
  },
  {
    text: "My second todo",
    isCompleted: true
  }])

  const addTodo = text => {
    const newTodos = [...todos, { text, isCompleted: false }];
    setTodos(newTodos);
  };

  return (
    <div >
      <header className="App-header">
        <p>Todo List</p>
        
        {/* <Form addTodo={addTodo} /> */}

        {todos.map((todo, i) => (
          <Todo
            key={i}
            index={i}
            todo={todo}
          />
        ))}

      </header>
    </div>
  );
}

export default App;
