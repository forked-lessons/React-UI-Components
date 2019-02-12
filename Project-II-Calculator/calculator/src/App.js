import React from 'react';
import './App.css';
import NumberButton from './components/ButtonComponents/NumberButton';
import ActionButton from './components/ButtonComponents/ActionButton';

class App extends React.Component {
  render() {
    return (
      <div className='calc-wrapper' >
        {/* answer line */}
        <NumberButton bgColor='num-button' text='clear' />
        <ActionButton className='action-button' text='/' />


        <NumberButton bgColor='num-button' text='9' />
        <NumberButton bgColor='num-button' text='8' />
        <NumberButton bgColor='num-button' text='7' />
        <ActionButton className='action-button' text='X' />


        <NumberButton bgColor='num-button' text='6' />
        <NumberButton bgColor='num-button' text='5' />
        <NumberButton bgColor='num-button' text='4' />
        <ActionButton className='action-button' text='-' />


        <NumberButton bgColor='num-button' text='3' />
        <NumberButton bgColor='num-button' text='2' />
        <NumberButton bgColor='num-button' text='1' />
        <ActionButton className='action-button' text='+' />


        <NumberButton bgColor='num-button' text='0' />
        <ActionButton className='action-button' text='=' />

      </div >
    )
  }
}

export default App;
