import React from 'react';
import './App.css';
import MultiInput from './components/MultiInput/MultiInput';
import TimeConverter from './components/TimeConverter/TimeConveter';
import GuessTheNumber from './components/GuessTheNumber/GuessTheNumber';
import ColorPicker from './components/ColorPicker/ColorPicker';
import ColorPickerShades from './components/ColorPickerShades/ColorPickerShades';
import { InputProps } from './components/MultiInput/MultiInput.model';
import { CatchTheTarget } from './components/CatchTheTarget/CatchTheTarget';
import { FilterList } from './components/FilterList/FilterList';
import { UserForm } from './components/UserForm/UserForm';
import {SecretNumber} from './components/GuessTheNumber/SecretNumber';
import PersonalInfo from './components/UserForm/PersonalInfo';
import LocationInfo from './components/UserForm/LocationInfo';
import Summery from './components/UserForm/Summery';
import StepsForm from './components/UserForm/StepsForm';

function App() {

  const inputStyle = {
    padding: '5px',
    margin: '5px',
    display: 'block'
  };

  const items = ['apple', 'oranges', 'watermelon'];

  const secretNumber = new SecretNumber({
    lie: () => {
      return Math.random() >= 0.9;
    },
    pickNumber: () => {
       return Math.floor(Math.random() * 1000) + 1
    }
  });

  const stepsForm = new StepsForm();

  return (
    <>
    <MultiInput
      inputsNumber={5}>
        {
          ({text, onChange}: InputProps) => <input
                                  style={inputStyle}
                                  type='text'
                                  value={text}
                                  onChange={onChange}
                                  placeholder='type something...'>
                                </input>
          
        }  
    </MultiInput>
    <TimeConverter />
    <GuessTheNumber secretNumber={secretNumber} />
    <ColorPicker color="#dddddd" />
    <ColorPickerShades />
    <CatchTheTarget />
    <FilterList items={items} />
    <UserForm stepsForm={stepsForm} />
    </>
  );
}

export default App;
