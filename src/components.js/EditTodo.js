import React,{useState} from 'react'
import '../style.css';


export const EditTodo = ({editTodolist, task}) => {
    const [value, setValue] = useState(task.task)
    const handleSubmit = e => {
      e.preventDefault()
      editTodolist(value, task.id)
      setValue("")
    }
  return (
    <form className='todoForm' onSubmit={handleSubmit}>
        <input type='text' className='todo-input' placeholder='Update Task'
        value={value} onChange={(e)=>setValue(e.target.value)}></input>
        <button type='submit' className='todo-btn'>Update Task</button>
    </form>
  )
}
