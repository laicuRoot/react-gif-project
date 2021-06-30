import React, { Component } from 'react';

class Gif extends Component {
  handleClick = () => {
    if (this.props.updateID) {
      this.props.updateID(this.props.id)
    }
  }
  render() {
    const src = `https://media1.giphy.com/media/${this.props.id}/giphy.webp`;
    return(
      <img src={src} alt=""
      className='gif'
      onClick={this.handleClick} />
      );
  }
}

export default Gif;
