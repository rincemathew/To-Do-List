import React,{useState} from 'react'
import '../style.css';
import {swal} from '../helper/sweetAlert'



export const EditTodo = ({editTodolist, task}) => {
    const [value, setValue] = useState(task.task)
    const handleSubmit = e => {
      e.preventDefault()
      if(value.length < 4) {
        swal("Error!","Text should be more than 3 character","error")
      } else {
        editTodolist(value, task.id)
        setValue("")
      }
    }
  return (
    <form className='todoForm' onSubmit={handleSubmit}>
        <input type='text' className='todo-input' placeholder='Update Task'
        value={value} onChange={(e)=>setValue(e.target.value)} required></input>
        <button type='submit' className='todo-btn'>Update Task</button>
    </form>
  )
}
