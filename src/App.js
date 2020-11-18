import React from 'react'
import './App.css';
import Progress from './components/progress/Progress'
import Username from './components/profile/Username'
import AverageScore from './components/average/AverageScore';
import Main from './components/generalprofile/GeneralProfile';
import GeneralProfile from './components/generalprofile/GeneralProfile';

function App() {
  return (
    <div className="App" >
      <GeneralProfile />
    </div>
  );
}

export default App;
