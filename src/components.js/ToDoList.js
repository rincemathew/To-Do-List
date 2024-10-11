import React from 'react'
import ToDoCard from './ToDoCard'

function ToDoList() {
  return (
    <>
    <div className="m-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
    <ToDoCard></ToDoCard>
    <ToDoCard></ToDoCard>
    <ToDoCard></ToDoCard>
    <ToDoCard></ToDoCard>
    <ToDoCard></ToDoCard>
    </div>
    </>
  )
}

export default ToDoList