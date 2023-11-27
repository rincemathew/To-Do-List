import React, {useState} from 'react'
import { TodoForm } from './TodoForm'
import { ToDo } from './ToDo'
import { EditTodo } from './EditTodo'
import '../style.css';
import {swal} from '../helper/sweetAlert'


export const TodoWrapper = () => {
  const [todos,setTodos] = useState([])

  const addTodo = todo => {
    const existingtodo = todos.find(todoex => todoex.task.trim().toLowerCase() === todo.trim().toLowerCase() )
    existingtodo ? swal("Error!","This task already exist","error"):
    setTodos([{id:Date.now(),task:todo,
      completed:false,isEditing:false},...todos])
      swal("Success!","This task added successfully","success")
  }

  const toggleComplete = id => {
    setTodos(todos.map(todo => todo.id === id ? {
      ...todo, completed:!todo.completed}:todo))
  }

  const deleteTodo = id => {
    setTodos(todos.filter( todo => todo.id !== id))
    swal("Success!","This task deleted successfully","success")
  }

  const editTodo = id => {
    setTodos(todos.map(todo => todo.id === id ? {
      ...todo, isEditing:!todo.isEditing}:todo))
  }

  const editTask = (task, id) => {
    const existingedittodo = todos.find(todoex => todoex.task.trim().toLowerCase() === task.trim().toLowerCase() && todoex.id !== id )
    existingedittodo ? swal("Error!","THis text already exist ","error"):
    setTodos(todos.map(todo => todo.id === id ? {
      ...todo, task, isEditing: !todo.isEditing}:todo
    ))
    swal("Success!","This task edited successfully","success")
  }

  return (
    <div className="todo-wrapper">
      <h1>Get Things Done...</h1>
      <TodoForm addTodo={addTodo}></TodoForm>
      {todos.map((todo, index) => (
        todo.isEditing ? (
          <EditTodo editTodolist={editTask} task={todo}></EditTodo>
        ):(
          <ToDo task={todo} key={index}
        toggleComplete ={toggleComplete} 
        deleteTodo ={deleteTodo} 
        editTodo ={editTodo}></ToDo>
        )
      ))}
    </div>
  );
}
