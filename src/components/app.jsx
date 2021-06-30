import React, { Component } from 'react';
import giphy from 'giphy-api';

import SearchBar from './searchbar.jsx';
import Gif from './gif.jsx';
import GifList from './gif_list.jsx';

// eslint-disable
class App extends Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);

    this.state = {
      gifs: [],
      selectedGifId: null,
    };
  }

  search = (query) => {
    giphy('axk8G8BI8BOYivVbJAUqRgbDyj5IMK2T').search({
      q: query,
      rating: 'g',
      limit: 10
    }, (err, res) => {
      // Res contains gif data!
      this.setState({
        gifs: res.data
      });
    });
  }

  updateID = (id) => {
    this.setState({
      selectedGifId: id
    });
  }

  // eslint-disable-next-line lines-between-class-members
  render() {
    return (
      <div>
        <div className='left-scene'>
          <SearchBar searchFunction={this.search} />
          <div className='selected-gif'>
            <Gif id={this.state.selectedGifId} />
          </div>
        </div>
        <div className='right-scene'>
          <GifList gifs={this.state.gifs} updateID={this.updateID} />
        </div>
      </div>
      );
  }
}


export default App;
