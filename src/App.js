import React, { Component } from 'react';
import Main from './components/main/Main'
import {SlideDownContainer} from './components/common/ui/Theme'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Main wrapper={SlideDownContainer}/>
      </div>
    );
  }
}

export default App;