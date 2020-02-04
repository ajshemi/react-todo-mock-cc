import React, { Component } from 'react';

export default class SearchBarComponent extends Component {
  onChange=(e) => {
    this.props.handleOnChange(e.target.value)
  }
  render() {

    return (
    <div className="ui input fluid"> 
        <input autoComplete="off" placeholder="Search Term" type="text" name="searchTerm" value={this.props.value} onChange={this.onChange}/>
    </div>
    );
  }
}
