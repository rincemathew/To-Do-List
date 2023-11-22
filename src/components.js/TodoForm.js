import React, {useState} from 'react'
import '../style.css';


export const TodoForm = ({addTodo}) => {
    const [value, setValue] = useState("")
    const handleSubmit = e => {
      e.preventDefault()
      addTodo(value)
      setValue("")
    }
  return (
    <form className='todoForm' onSubmit={handleSubmit}>
        <input type='text' className='todo-input' placeholder='What is the task???'
        value={value} onChange={(e)=>setValue(e.target.value)}></input>
        <button type='submit' className='todo-btn'>Add Task</button>
    </form>
  )
}
