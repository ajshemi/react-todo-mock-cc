import React, { Component } from 'react';

export default class NewToDoForm extends Component {

  state={
    title:"",
    completed:false
  }
  handleChange=(e) => {
    // console.log(e)
    this.setState({

      [e.target.name]:e.target.value
    }
    // ,() => {console.log(this.state.title)}
    )
  }



  handleSubmit=(e) => {
    e.preventDefault()
    // console.log("hello")
    this.props.handleNewTodo(this.state)
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit} className="ui form">
            <h1>New ToDo</h1>
            <div className="field">
                <label>Title</label>
                <input type="text" name="title" value={this.state.value} onChange={this.handleChange} placeholder="Title"/>
            </div>
            <button className="ui button" type="submit">Submit</button>
        </form>
      </div>
    );
  }
}
