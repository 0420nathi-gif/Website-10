import React from 'react'
import TodoCard from './TodoCard'

export default function toDoList() {

 let todos = [
  "Learn React",
  "Learn React Router",
  "Learn React Redux",

   ]
  return (
    <ul className='main'>
    {
     todos.map((todo, index) => {
      return (
       <TodoCard key={todoIndex}>
        
       </TodoCard>
      )
     })
    }
    </ul>
  )
}
