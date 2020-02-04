import React from 'react';
import './App.css';
import Header from './components/Header'
import ToDoContainer from './components/ToDoContainer'


class App extends React.Component{

  state = {
    todos: []
  }
  componentDidMount(){
    fetch('http://localhost:3000/todos')
    .then(response=>response.json())
    .then(pojos=>
      this.setState({
        todos:pojos
      })
    )
  }
  handleNewTodo= (newTodo) => {
    // let copyTodo=[...newTodo]
    // console.log(newTodo.completed)
    fetch('http://localhost:3000/todos',{
      method:'POST',
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify({
        title:newTodo.title,
        completed:newTodo.completed
      })
    }
    )
    .then(response=>response.json())
    .then(newPojo=> {
      let newArray=[...this.state.todos, newPojo]
      this.setState({
        todos:newArray})
    })
    
  }

  handleToggleComplete=(e) => {
    // console.log(e)
    let newArray=[...this.state.todos]
    // console.log(newArray)
    let foundTodo=newArray.find(element=>element===e)
    foundTodo.completed=!foundTodo.completed
    // console.log(newArray)
    this.setState({
      todos:newArray
    })

    // console.log(foundTodo)
    
  }

  handleDeleting=(e) => {
    // console.log(e.id)
    // console.log(`http://localhost:3000/todos/${e.id}`)
    //delete has no body
    //the response is a dummy pojos or emptyObject {}?
    //filter through the current state exclude the object with e.id
    //update state
    fetch(`http://localhost:3000/todos/${e.id}`,{
      method:'DELETE',
      headers: {'Content-Type':'application/json'},
    }
    )
    .then(response=>response.json())
    .then(newPojo=> {
      let filteredArray = this.state.todos.filter(todoObj => todoObj.id !== e.id)
      this.setState({
        todos: filteredArray
      })
    })

    
  }

  //a post request return one newly created object

  render(){
    return (
      <div className="App">
        <Header/>
        <ToDoContainer handleToggleComplete={this.handleToggleComplete} handleDeleting={this.handleDeleting} handleNewTodo={this.handleNewTodo} todos={this.state.todos}/>
      </div>
    );
  }
}

export default App;
