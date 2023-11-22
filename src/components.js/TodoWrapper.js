import React, {useState} from 'react'
import { TodoForm } from './TodoForm'

export const TodoWrapper = () => {
  const [todos,setTodos] = useState([])

  const addTodo = todo => {
    setTodos([...todos,{id:Date.now(),task:todo,
    completed:false,isEdited:false}])
    console.log(todos)
  }
  return (
    <div className='todo-wrapper'>
    <TodoForm addTodo={addTodo}></TodoForm>
    </div>
  )
}
