import React from 'react'
import ToDoCard from './ToDoCard'

const CompletedContainer = (props) => {
    // console.log(props.todos)
    let arrayOfComponents=props.todos.map((todoObj,i)=>(<ToDoCard key={`${i}_${todoObj.title}`} todo={todoObj} handleDeleting={props.handleDeleting} handleToggleComplete={props.handleToggleComplete}/>))
    return (
        <div>
            <h1>Completed Todos</h1>
            {arrayOfComponents}
             {/* Which Array method can you use? */}
        </div>
    )
}

export default CompletedContainer