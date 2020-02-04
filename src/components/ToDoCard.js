import React from 'react'



const ToDoCard = (props) => {
  console.log(props)
  
  //when defining a function in functional component use const
  const handleDelete= (e) => {
    // console.dir(e.target)
    // console.log(props)
    props.handleDeleting(props.todo)
  }
  const toggleComplete=(e) => {
    // console.log(e.target)
    // console.log(props.todo.completed)
    props.handleToggleComplete(props.todo)
  }


  // const {incompleteTodos,completeTodos}=props
  // console.log(incompeteTodos)
    return (
   

    <div className="ui card">
        <div className="content">
          <div className="header">{props.todo.title}</div>
          {/* The button will require some conditional rendering. 
            If the button is under the Incomplete Container, button should be blue and text should say Complete
            If the button is under Complete Container, button should be orange and text should say Incomplete 
            */}
          <button onClick={toggleComplete} className={`ui button ${props.todo.completed? "blue" :"orange"}`}>{props.todo.completed? "Complete":"Incomplete"}</button>
          <button onClick={handleDelete} className="ui button red">Delete</button>
        </div>
        
    </div>
    )
}

export default ToDoCard