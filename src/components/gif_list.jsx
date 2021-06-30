import React, { Component } from 'react';
import Gif from './gif.jsx';

class GifList extends Component {
 renderList = (props) => {
   // eslint-disable-next-line arrow-parens, react/destructuring-assignment
   return this.props.gifs.map(gif => {
     return <Gif id={gif.id} key={gif.id} updateID={this.props.updateID} />;
   });
 }
  render() {
    return (
      <div className='gif-list'>
        {this.renderList()}
      </div>
    )
  }
}

export default GifList;
