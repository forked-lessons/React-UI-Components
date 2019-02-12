import React from 'react';
import './App.css';
import NumberButton from './components/ButtonComponents/NumberButton';

class App extends React.Component {
  render() {
    return (
      <div className='calc-wrapper' >
        <NumberButton bgColor='num-button' text='9' />
        <NumberButton bgColor='num-button' text='8' />
        <NumberButton bgColor='num-button' text='7' />
        <NumberButton bgColor='num-button' text='6' />
        <NumberButton bgColor='num-button' text='5' />
        <NumberButton bgColor='num-button' text='4' />
        <NumberButton bgColor='num-button' text='3' />
        <NumberButton bgColor='num-button' text='2' />
        <NumberButton bgColor='num-button' text='1' />
        <NumberButton bgColor='num-button' text='0' />
      </div >
    )
  }
}

export default App;
