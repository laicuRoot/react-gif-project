import React, { Component } from 'react';

class Gif extends Component {
  render() {
    const src = `https://media1.giphy.com/media/${this.props.id}/giphy.webp`;
    return(
      <img src={src} alt="" className='gif' />
      );
  }
}

export default Gif;