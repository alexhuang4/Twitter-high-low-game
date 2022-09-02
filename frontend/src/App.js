import React from 'react';
import User1 from './components/User1';
import User2 from './components/User2';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          TWITTER HIGH-LOW GAME
        </p>
        <u>QUESTION</u>
        <p>
          Does the second user have a higher or lower follower count?
        </p>
        <u>
          FIRST USER
        </u>
        <User1 />
        <u>
          SECOND USER
        </u>
        <User2 />
      </header>
    </div>
  );
}

export default App;