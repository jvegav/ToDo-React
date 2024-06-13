/* eslint-disable react/prop-types */
import TodoItem from "./TodoItem"

export default function ListTodo({todos, togle, deleteTodo}){


    return <>
    <ul className="list">

    {todos.length === 0 && "No hay TODOS"}
    {todos.map(todo =>{
        return <>
        <TodoItem id = {todo.id} completed={todo.completed} title={todo.title} keyUnique={todo.id}  togle = {togle} deleteTodo = {deleteTodo}/>
    </>
})}
</ul>
    
    </>
}