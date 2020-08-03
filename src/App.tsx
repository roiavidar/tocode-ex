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
import VimeoMovieService from './components/MoviePlayer/VimeoMovieService';
import PersonalInfo from './components/UserForm/PersonalInfo';
import LocationInfo from './components/UserForm/LocationInfo';
import Summery from './components/UserForm/Summery';
import Carousel from './components/Carousel/Carousel';
import FancyCarousel from './components/Carousel/FancyCarousel';
import AwesomeCarousel from './components/Carousel/AwesomeCarousel';
import FindStarWarsCharacter from './components/StarWarsCharacter/FindStarWarsCharacter';
import TableData from './components/SortableTable/TableData';
import { Provider } from 'react-redux';
import store from './redux/store';
import Chat from './components/Chat/Chat';

function App() {

  const inputStyle = {
    padding: '5px',
    margin: '5px',
    display: 'block'
  };

  const carouselStyle = {
    height: '300px',
    width: '300px'
  }

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
  const tableData = new TableData();
  tableData.data = [
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
    <TicTacToe gameSpeed={1500} computerAI={{isFirst: true, logic: new AI()}} /> 
      */}
    {/* <UserForm stepsForm={stepsForm}>
        <PersonalInfo />
        <LocationInfo />
        <Summery />
    </UserForm>
    <SortableTable sortableService={sortableTable} tableData={tableData} />
    <InputsAutoFocus inputsNumber={6} />
    <StateForm /> 
    <RefForm />
    <MoviePlayer movieId={25323516} moviePlayer={new VimeoMovieService()} />
    <FetchStarWarsData 
        url={starWarsUrlBuilder.getUrl('1', 'films')}
        renderItem={(data: any)=> (
        <StarWarsMovie {...data} />
      )} />
      <ActorMoviesCard actorId={'1'} />
      <Carousel style={carouselStyle}>
        <img src="https://upload.wikimedia.org/wikipedia/commons/8/89/Los_Angeles%2C_Winter_2016.jpg" alt="Los Angeles" />
        <img src="https://media.timeout.com/images/105658075/630/472/image.jpg" alt="Chicago" />
        <img src="https://static01.nyt.com/images/2020/05/10/nyregion/00nyvirus-reopen-timessquare/00nyvirus-reopen101-mobileMasterAt3x.jpg" alt="New York" />
      </Carousel>
      <FancyCarousel style={carouselStyle} carouselId="twitterBootstap">
        <img src="https://upload.wikimedia.org/wikipedia/commons/8/89/Los_Angeles%2C_Winter_2016.jpg" alt="Los Angeles" />
        <img src="https://media.timeout.com/images/105658075/630/472/image.jpg" alt="Chicago" />
        <img src="https://static01.nyt.com/images/2020/05/10/nyregion/00nyvirus-reopen-timessquare/00nyvirus-reopen101-mobileMasterAt3x.jpg" alt="New York" />
      </FancyCarousel>
      <AwesomeCarousel style={carouselStyle}>
        <img height='300' src="https://upload.wikimedia.org/wikipedia/commons/8/89/Los_Angeles%2C_Winter_2016.jpg" alt="Los Angeles" />
        <img height='300' src="https://media.timeout.com/images/105658075/630/472/image.jpg" alt="Chicago" />
        <img height='300' src="https://static01.nyt.com/images/2020/05/10/nyregion/00nyvirus-reopen-timessquare/00nyvirus-reopen101-mobileMasterAt3x.jpg" alt="New York" />
      </AwesomeCarousel>
      <FindStarWarsCharacter /> */}

      <Provider store={store}>
        <Chat />
      </Provider>
    </>
  );
}

export default App;
