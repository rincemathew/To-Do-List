import React from 'react'
import '../style.css';
import { MdDeleteForever } from "react-icons/md";
import { IoArchive } from "react-icons/io5";
import { FaEdit } from "react-icons/fa";




export const ToDo = ({task, toggleComplete,editTodo, deleteTodo}) => {
  return (
    <div className='todo'>
    <p className={`${task.completed?'completed':""}`}>{task.task}</p>
    <IoArchive onClick={()=>toggleComplete(task.id)}/>
    <FaEdit onClick={()=>editTodo(task.id)}/>
    <MdDeleteForever onClick={()=>deleteTodo(task.id)}/>
    </div>
  )
}
