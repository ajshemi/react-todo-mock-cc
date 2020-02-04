import React, { Component } from 'react';
import CompletedContainer from './CompletedContainer'
import IncompleteContainer from './IncompleteContainer'
import NewToDoForm from './NewToDoForm'

export default class ToDoContainer extends Component {

  render() {
    let completeList=this.props.todos.filter(todoObj=>todoObj.completed===true)
    // console.log(completedList)
    let incompleteList=this.props.todos.filter(todoObj=>todoObj.completed===false)
    return (
      <div id="todo-container">
        <NewToDoForm handleNewTodo={this.props.handleNewTodo}/>
        <CompletedContainer handleToggleComplete={this.props.handleToggleComplete} handleDeleting={this.props.handleDeleting} todos={completeList} />
        <IncompleteContainer handleToggleComplete={this.props.handleToggleComplete} handleDeleting={this.props.handleDeleting} todos={incompleteList}/>
      </div>
    );
  }
}
