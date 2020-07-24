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
import StepsForm from './components/UserForm/StepsForm';
import { TimeConverterLogic } from './components/TimeConverter/TimeConverterLogic';
import CatchTheTargetLogic from './components/CatchTheTarget/CatchTheTargetLogic';
import TicTacToe from './components/TicTacToe/TicTacToe';
import { AI } from './components/TicTacToe/AI';

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

  const timeConverterLogic = new TimeConverterLogic({
    ratios: [1, 60, 3600]
  });

  const boxes = 10;
  const catchTheTargetLogic = new CatchTheTargetLogic({
    bonusPoints: 10,
    penaltyPoints: -5,
    boxes,
    calcTarget: () => Math.floor(Math.random() * boxes)
  });

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
    <TimeConverter timeConverterLogic={timeConverterLogic} />
    <GuessTheNumber secretNumber={secretNumber} />
    <ColorPicker color="#dddddd" />
    <ColorPickerShades />
    <CatchTheTarget logic={catchTheTargetLogic} />
    <FilterList items={items} />
    <UserForm stepsForm={stepsForm} />
    <TicTacToe gameSpeed={1500} computerAI={{isFirst: true, logic: new AI()}} />
    </>
  );
}

export default App;
