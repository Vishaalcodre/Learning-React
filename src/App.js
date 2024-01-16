import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import TodoTable from './components/to_do_table';

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

  const addTodo = (description, assigned) => {
    let rowNumber = 0;
    if(todos.length > 0)
    {
      rowNumber = todos[todos.length - 1].rowNumber + 1;
    }
    
    else{
      rowNumber = 1;
    }

      const newTodo = 
      {
        rowNumber: rowNumber,
        rowDescription: description,
        rowAssigned: assigned
      };
      setTodos(todos => [...todos, newTodo])
      todos.push(newTodo);
      console.log(todos);
  }

  const handleAddTodo = () => {
    const description = prompt("Enter task description:");
    const assigned = prompt("Enter assigned name:");
  
    if (description && assigned) {
      addTodo(description, assigned);
    }
  };
  

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