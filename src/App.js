import React, { useState, useEffect, useReducer } from 'react';
import CreateList from './CreateList';
import Context from './Context.js';
import Reducer from './Reducer';
import './App.css';
import './index.css';

function App() {
  const [newTodo, setNewTodo] = useState('');
  // const [todos, setTodos] = useState([]);
  const [state, dispatch] = useReducer(Reducer, JSON.parse(localStorage.getItem('todos')))


  // useEffect(() => {
  //   localStorage.setItem('todos', JSON.stringify(todos))
  // }, [todos])

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(state))
  }, [state])


  const HandleSubmit = (e) => {
    e.preventDefault();
    setNewTodo(e.target.value)

  }

  const HandleNewTodo = (e) => {
    e.preventDefault();

    if (newTodo === "") return;
    console.log(newTodo);

    dispatch({
      type: 'add',
      payload: newTodo,
      // complete: false
    })

    // setTodos([...state, 
    //   { 
    //     id: Date.now(), 
    //     text: newTodo, 
    //     complete: false 
    //   }])

    setNewTodo('')
  }

  // function removeTodo(id) {
  //   setTodos(todos.filter((todo) => todo.id !== id))
  // }

  // function checkedTodo(id) {
  //   setTodos(todos.map((todo) => {
  //     if(todo.id === id ) {
  //       todo.complete = !todo.complete;

  //     }
  //     return todo;
  //   }))
  // }

  return (
    <Context.Provider value={{
      // removeTodo, checkedTodo 
      dispatch
    }}>
      <div className="App">
        <form className="form" onSubmit={HandleNewTodo}>
          <input className="input-field" placeholder="Add the task..."
            value={newTodo}
            onChange={HandleSubmit} />
          <button className="add-btn" onClick={HandleNewTodo}>Add task</button>
        </form>
        <CreateList value={state} />
      </div>
    </Context.Provider>
  );
}

export default App;
