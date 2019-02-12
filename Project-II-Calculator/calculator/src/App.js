import React from 'react';
import './App.css';
import NumberButton from './components/ButtonComponents/NumberButton';
import ActionButton from './components/ButtonComponents/ActionButton';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';

class App extends React.Component {
  render() {
    return (
      <div className='calc-wrapper' >
        <CalculatorDisplay />
        {/* answer line */}
        <div className='row'>
          <ActionButton className='wide-btn num-button' text='clear' />
          <NumberButton bgColor='action-button small-btn' text={'\u00F7'} />
        </div>
        <div className='row'>
          <NumberButton bgColor='num-button small-btn' text='7' />
          <NumberButton bgColor='num-button small-btn' text='8' />
          <NumberButton bgColor='num-button small-btn' text='9' />
          <NumberButton bgColor='action-button small-btn' text={'\u00D7'} />
        </div>
        <div className='row'>
          <NumberButton bgColor='num-button small-btn' text='4' />
          <NumberButton bgColor='num-button small-btn' text='5' />
          <NumberButton bgColor='num-button small-btn' text='6' />
          <NumberButton bgColor='action-button small-btn' text={'\u2212'} />
        </div>
        <div className='row'>
          <NumberButton bgColor='num-button small-btn' text='1' />
          <NumberButton bgColor='num-button small-btn' text='2' />
          <NumberButton bgColor='num-button small-btn' text='3' />
          <NumberButton bgColor='action-button small-btn' text='+' />
        </div>
        <div className='row'>
          <ActionButton className='wide-btn num-button ' text='0' />
          <NumberButton bgColor='action-button small-btn' text='=' />
        </div>

      </div >
    )
  }
}

export default App;
