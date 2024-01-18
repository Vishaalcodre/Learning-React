import React, {useState} from 'react';
import './App.css';
import {TodoTable} from './components/to_do_table';

export const App = () => {
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

  const addTodo = (description: string, assigned: string) => {
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
      console.log(todos);
  }

  const deleteTodo = (deleteTodoRowNumber: number) =>{
    let filtered = todos.filter(function(value){
      return value.rowNumber !== deleteTodoRowNumber;
    });
    setTodos(filtered);
  }

  const handleAddTodo = () => {
    const description = prompt("Enter Task Description:");
    const assigned = prompt("Enter Task Assignee Name:");
  
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
          <TodoTable todos = {todos} deleteTodo = {deleteTodo} />
          <button className='btn btn-primary' onClick={handleAddTodo}>Add Todo</button>
          {/* <NewTodoForm/> */}
        </div>
      </div>
    </div>
  );
}