import React from 'react';

import lottie from 'lottie-web';
import animationData from './26281-chart-circle.json';
import './loading.css'

let animObj = null;

class Loading extends React.Component {
  componentDidMount() {
    console.log('componentDidMount');
    
    //call the loadAnimation to start the animation
    animObj = lottie.loadAnimation({
      container: this.animBox, // the dom element that will contain the animation
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: animationData // the path to the animation json
    });
  }
  handleStop = () => {
    animObj.stop();
  }
  handlePlay() {
    animObj.play();
  }
  render() {
    return (
      <div className="App">
        {/* <h2>This is my Lottie Web animation</h2> */}
        {/* This is you wrapper where animation will load */}
        <div className="anim" style={{width: 400, margin: '0 auto'}} ref={ ref => this.animBox = ref}></div>
        {/* <button onClick={this.handleStop}>Stop</button>
        <button onClick={this.handlePlay}>Play</button> */}
      </div>
    );
  }
}

export default Loading;