import React, { Component } from 'react';
import logo from './logo.svg';
// import CircleLoader from './components/CircleLoader'
import Main from './components/main/Main'
import {Motion, spring} from 'react-motion'
import './App.css';

// const MotionTile = props => {
//   return (
//     <Motion
//       defaultStyle={{scale: 0.5}}
//       style={{
//         scale: spring(2, {stiffness: 170, damping: 20}),
//       }}
//     >
//       {interpolatedStyle => <CircleLoader
//         scale={interpolatedStyle.scale}
//         {...props}
//       />}
//     </Motion>
//   )
// }

class App extends Component {
  render() {
    return (
      <div className="App">
        <Main/>
      </div>
    );
  }
}

export default App;
