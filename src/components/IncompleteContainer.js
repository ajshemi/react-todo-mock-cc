import SearchBarComponent from './SearchBarComponent'
import ToDoCard from './ToDoCard'
import React, { Component } from 'react';

export default class IncompleteContainer extends Component {


    // When implementing the search bar, consider implementing state here to make it dynamic. 
    // i.e everytime you type in the input field, the ToDos are immediately filtered
    
    state = {
        searchTerm: ""
    }

    // When implementing the search bar, consider implementing a function that handles setState and pass this function down to 
    // SearchBarComponent
    handleSearch=  () => {
      const {searchTerm} = this.state;
      const lowercasedFilter = searchTerm.toLowerCase();
      const filteredData = this.props.todos.filter(todo=> todo.title.toLowerCase().includes(searchTerm)

      );
      return filteredData
      //handleSearch returns an array todos that matches the searchTerm.............................. "dynamically"
      //the searchTerm is comingr from state
    }
  
    handleOnChange = (e) => {
      // console.log(e)
      this.setState({
        searchTerm:e
      }
      // }, ()=> console.log(this.state.searchTerm)
      )
    }

    // When implementing the search term, consider implementing a function that FILTERs the todos.
    // To determine which to filter, find out which ToDo title INCLUDES the search term typed.

  render() {
    let arrayOfComponents=this.handleSearch().map((todoObj,i)=>(<ToDoCard key={`${i}_${todoObj.title}`} todo={todoObj} handleDeleting={this.props.handleDeleting} handleToggleComplete={this.props.handleToggleComplete}/>))

    return (
        <div>
            <h1>Incomplete Todos</h1>
            {<SearchBarComponent value={this.state.searchTerm} handleOnChange={this.handleOnChange}/>}
            {arrayOfComponents}
            {/* Which Array method can you use? */}
        </div>
    )
  }
}


//since state is here pass down  'onChange as handleOnChange and value as this.state.searchTerm from here'
//handleOnChange takes in an arguement 'entered value' then setState with the enteredValue
// handleSearch returns an array todos that matches the searchTerm
