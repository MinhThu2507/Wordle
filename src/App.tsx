import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import './App.css';
import Board from './Components/Board/Board';
import Heading from './Components/Heading/Heading';
import {RootState} from './Redux/store'

function App() {

  const {board} = useSelector((state: RootState) => state.boardReducer)

  return (
    <div className="App">
      <Heading type='h1' text='Wordle' />
      <Heading type='subtitle' text='Another Wordle Clone' />
      <div className='board-container'>
        <Board board={board}/>
      </div>
    </div>
  );
}

export default App;
