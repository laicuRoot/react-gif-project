import React, { Component } from 'react';

class SearchBar extends Component {
  handleUpdate = (event) => {
    this.props.searchFunction(event.target.value);
  }
  render() {
    return (
      <div>
        <input type="text" className="from-control form-search" id="" placeholder="Search gif..."
        onChange={this.handleUpdate} />
      </div>
      );
  }
}

export default SearchBar;

