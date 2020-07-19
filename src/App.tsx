import React from 'react';
import './App.css';
import MultiInput from './components/MultiInput/MultiInput';
import TimeConverter from './components/TimeConverter/TimeConveter';
import GuessTheNumber from './components/GuessTheNumber/GuessTheNumber';
import ColorPicker from './components/ColorPicker/ColorPicker';
import ColorPickerShades from './components/ColorPickerShades/ColorPickerShades';

function App() {

  const inputStyle = {
    padding: '5px',
    margin: '5px',
    display: 'block'
  };

  return (
    <>
    <MultiInput
      inputsNumber={5}>
        <input
          style={inputStyle}
          type='text'
          placeholder='type something...'>
        </input>
    </MultiInput>
    <TimeConverter />
    <GuessTheNumber />
    <ColorPicker color="#dddddd" />
    <ColorPickerShades />
    </>
  );
}

export default App;
