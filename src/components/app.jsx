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
      selectedGifId: 'UWKwo3KQrkTcRzj0Bz',
    };
  }

  search = (query) => {
    giphy('axk8G8BI8BOYivVbJAUqRgbDyj5IMK2T').search({
      q: query,
      rating: 'g',
      limit: 10
    },  (err, res) => {
        // Res contains gif data!
        this.setState({
          gifs: res.data
        });
    });
  }

  // eslint-disable-next-line lines-between-class-members
  render() {
    const gifs = [
      {id: 'UWKwo3KQrkTcRzj0Bz'},
      {id: 'tJ1jipvvMs4r7xuZnI'},
    ];
    return (
      <div>
        <div className='left-scene'>
          <SearchBar searchFunction={this.search} />
          <div className='selected-gif'>
            <Gif id={this.state.selectedGifId} />
          </div>
        </div>
        <div className='right-scene'>
          <GifList gifs={this.state.gifs} />
        </div>
      </div>
      );
  }
}


export default App;
