import React from 'react'
import Task from '../components/Task'
import AddTask from '../components/AddTask'

const Todo = () => {
  return (
    <div>
      <AddTask/>
      <Task/>
    </div>
  )
}

export default Todo