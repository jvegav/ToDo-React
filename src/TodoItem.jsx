
export default function TodoItem({completed,id,title,keyUnique, togle,deleteTodo}){

    return <>
    <li key = {keyUnique}>
        <label>
        <input 
        checked = {completed}
        type= "checkbox" 
        onChange={ () => togle(id,completed)}
        />
        {title}
        </label>
        <button className="btn btn-danger" 
        onClick={() => deleteTodo(id)}
        > Borrar </button>
        </li>
    </>
}