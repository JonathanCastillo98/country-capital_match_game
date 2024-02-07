import React from 'react';
import MatchGame from './components/MatchGame/MatchGame';
import { IData } from './utils/types.util';
import './App.css'

const App: React.FC = () => {
  const data: IData = {
    Germany: 'Berlin',
    France: 'Paris',
    China: 'Beijing',
  };

  const jsonData = JSON.stringify(data);

  return (
    <div className='wrapper'>
      <h1>Country-Capital Match Game</h1>
      <MatchGame data={jsonData} />
    </div>
  );
};

export default App;
