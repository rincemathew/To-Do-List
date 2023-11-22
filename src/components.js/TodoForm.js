import React, {useState} from 'react'

export const TodoForm = () => {
    const [value, setValue] = useState("")
  return (
    <form className='todoForm'>
        <input type='text' className='todo-input' placeholder='What is the task???'
        onChange={(e)=>console.log(e.target.value)}></input>
        <button type='submit' className='todo-btn'>Add Task</button>
    </form>
  )
}
