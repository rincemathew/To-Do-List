import React, {useState} from 'react'
import '../style.css';
import {swal} from '../helper/sweetAlert'


export const TodoForm = ({addTodo}) => {
    const [value, setValue] = useState("")
    const handleSubmit = e => {
      e.preventDefault()
      if(value.length < 4) {
        swal("Error!","Text should be more than 3 character","error")
      } else {
        addTodo(value)
        setValue("")
      }
    }
  return (
    <form className='todoForm' onSubmit={handleSubmit}>
        <input type='text' className='todo-input' placeholder='What is the task???'
        value={value} onChange={(e)=>setValue(e.target.value)} required></input>
        <button type='submit' className='todo-btn'>Add Task</button>
    </form>
  )
}
