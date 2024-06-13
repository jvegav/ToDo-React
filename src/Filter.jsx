import { Fragment } from "react"

export default function FilterItems({showTodos,filterCompleted}){
    return <Fragment>
    
    <div className="container-filter">
    <button className="btn2" onClick={filterCompleted}>Filtrar No Completos</button>
    <button className="btn2" onClick={showTodos}> Quitar Filtro</button>
    </div>
    </Fragment>
}