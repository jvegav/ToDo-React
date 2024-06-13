import { useEffect, useState } from "react"
import "./styles.css"
import FormTodo from "./Form"
import ListTodo from "./List"
import FilterItems from "./Filter"



export default function App() {

  const [ todos, setTodos]  =useState(() => {
    const localValue = localStorage.getItem("ITEMS")
    if (localValue == null) return []
    return JSON.parse(localValue)
  })

  const [ completedTodos , setCompletedTodos] = useState([])

  const [showCompleted , setShowCompleted] = useState()

  useEffect(()=> {
    localStorage.setItem("ITEMS", JSON.stringify(todos))
  }, [todos] )


  function toogleTodo(id, completed){
    setTodos(currentTodos => {
      return currentTodos.map(todo=>{
        if(todo.id === id){
          
          let completed2 = !completed
          console.log(completed)
          console.log(completed2)
          
          return {...todo, completed:completed2}
        }
        return todo
      })
    })
  }

  function addTodo(title){

    setTodos((currentTodos) => {
    return [...currentTodos,
    {id : crypto.randomUUID(), title : title , completed: false}

    ]
    
    })}


  function deleteTodo(id){
    setTodos(currentTodos => {
      return currentTodos.filter(todo =>  todo.id !== id)
    })
  }

  function filterCompleted(){
    const completedTodos = todos.filter(todo =>  todo.completed === false)
    setCompletedTodos(completedTodos)
    if(completedTodos.length >= 0){
      setShowCompleted(true)
    }
    else {
      setShowCompleted(false)
    }
    
  }


  function showTodos(){
    
    setShowCompleted(false)
    
  
  }


  return <>
  <FormTodo addTodo = {addTodo}/>
  <FilterItems showTodos={showTodos} filterCompleted={filterCompleted}/>
  <ListTodo todos = {showCompleted ? completedTodos:todos}  togle = {toogleTodo}  deleteTodo = { deleteTodo} />
  </>
  
}

