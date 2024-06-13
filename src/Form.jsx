import { useState } from "react"
import"./styles.css"

export default function FormTodo({addTodo}){

    const [newItem , setItem] = useState("")
    

    function handleSubmit(e){
        e.preventDefault()

        addTodo(newItem)
        setItem("")
        }
    

    return <>
    <form className = "new-item-form" onSubmit={handleSubmit}>
    <div className="form-row">
      <label className= "titleForm" htmlFor = "item">Nuevo TODO </label>
      <input value = {newItem} onChange= {e => setItem(e.target.value) }type = " text" id = "item" className="input-form"/>

    </div>


    <button className="btn">Añadir</button>
  </form> 
  </>
}
