import React, { useState, useRef } from 'react'; // useRef allows referencing inside HTML
import TodoList from './TodoList';

function App() {
  // default state is array when the app first loads
  // object destructuring 
  const [todos, setTodos] = useState([])
  // we now have access to user input ref=this value
  const todoNameRef = useRef()

  function handleAddTodo(e) {
    const name = todoNameRef.current.value;
    if (name === '') return 
    setTodos()
    // set value to null to clear the input box
    todoNameRef.current.value = null;
  }

  return (
    // return two things in one return
    <>
      <TodoList todos={todos}/>
      <input ref={todoNameRef} type="text" />
      <button onClick={handleAddTodo}>Add Todo</button>
      <button>Clear Complete</button>
      <div>0 left to do</div>
    </>
  )
}

export default App;
