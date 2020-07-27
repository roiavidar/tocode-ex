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
import SortableTable from './components/SortableTable/SortableTable';
import SortableTableService from './components/SortableTable/SortableTable.service';
import InputsAutoFocus from './components/InputsAutoFocus/InputsAutoFocus';
import StateForm from './components/RefFormVSStateForm/StateForm';
import RefForm from './components/RefFormVSStateForm/RefForm';
import MoviePlayer from './components/MoviePlayer/MoviePlayer';
import FetchStarWarsData from './components/FetchData/FetchData';
import StarWarsMovie from './components/StarWarsMovie/StarWarsMovie';
import StarWarsUrlBuilder from './services/StartWarsUrlBuilder';
import ActorMoviesCard from './components/ActorMoviesCard.tsx/ActorMoviesCard';

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

  const sortableTable = new SortableTableService(sortLogic);

  sortableTable.SortedTable = [
    ['Name', 'Country', 'Email'],
    ['zina', 'UK', 'zina@gmail.com'],
    ['dan', 'Israel', 'dan@gmail.com'],
    ['dana', 'Israel', 'dana@gmail.com'],
    ['anna', 'Israel', 'anna@gmail.com']
  ];

  function sortLogic(itemA: string, itemB: string) {
      return itemA.localeCompare(itemB);
  }

  const starWarsUrlBuilder = new StarWarsUrlBuilder();
 
  return (
    <>
    {/* <MultiInput
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
    <TicTacToe gameSpeed={1500} computerAI={{isFirst: true, logic: new AI()}} /> */}
    <SortableTable sortableService={sortableTable} />
    <InputsAutoFocus inputsNumber={6} />
    <StateForm />
    <RefForm />
    <MoviePlayer movieId={25323516} />
    <FetchStarWarsData 
        url={starWarsUrlBuilder.getUrl('1', 'films')}
        renderItem={(data: any)=> (
        <StarWarsMovie {...data} />
      )} />
      <ActorMoviesCard actorId={'1'} />
    </>
  );
}

export default App;
