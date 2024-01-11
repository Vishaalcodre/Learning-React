import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import TodoTable from './components/to_do_table';
import NewTodoForm from './components/NewTodoForm';

function App() {
  const [todos, setTodos] = 
  useState([
    {
      rowNumber: 1, rowDescription: "Water the plants", rowAssigned: "Vishal" 
    },
    {
      rowNumber: 2, rowDescription: "Exercise", rowAssigned: "Vishal" 
    },
    {
      rowNumber: 3, rowDescription: "Throw Garbage", rowAssigned: "Praveen" 
    },
    {
      rowNumber: 4, rowDescription: "Charge phone", rowAssigned: "Praveen" 
    }
  ])

  const addTodo = () => {
    if(todos.length > 0)
    {
      const newTodo = 
      {
        rowNumber: todos.length +1,
        rowDescription: 'New Todo',
        rowAssigned: 'New User'
      }
      setTodos(todos => [...todos, newTodo])
      console.log(todos);
    }
  }

  return (
    <div className='mt-5 container'>
      <div className='card'>
        <div className='card-header'>
          Todo's
        </div>
        <div className='card-body'>
          <TodoTable todos = {todos}/>
          <button className='btn btn-primary' onClick={addTodo}>Add New Task</button>
          <NewTodoForm/>
        </div>
      </div>
    </div>
  );
}

export default App;