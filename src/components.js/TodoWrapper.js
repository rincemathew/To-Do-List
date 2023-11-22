import React, {useState} from 'react'
import { TodoForm } from './TodoForm'
import { ToDo } from './ToDo'
import { EditTodo } from './EditTodo'
import '../style.css';


export const TodoWrapper = () => {
  const [todos,setTodos] = useState([])

  const addTodo = todo => {
    setTodos([{id:Date.now(),task:todo,
    completed:false,isEditing:false},...todos])
    console.log(todos)
  }

  const toggleComplete = id => {
    setTodos(todos.map(todo => todo.id === id ? {
      ...todo, completed:!todo.completed}:todo))
  }

  const deleteTodo = id => {
    setTodos(todos.filter( todo => todo.id !== id))
  }

  const editTodo = id => {
    setTodos(todos.map(todo => todo.id === id ? {
      ...todo, isEditing:!todo.isEditing}:todo))
  }

  const editTask = (task, id) => {
    setTodos(todos.map(todo => todo.id === id ? {
      ...todo, task, isEditing: !todo.isEditing}:todo
    ))
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
