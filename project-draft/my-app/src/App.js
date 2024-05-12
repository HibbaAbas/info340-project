import React from 'react';
import Reminders from './Reminders';
import Nav from './Nav';
import Predictions from './Predictions';

const App = () => {
    return (
      <div className="app">
        <Nav />
     
       
        <Predictions />
        <Reminders />
   
      </div>
    );
  };
  
  export default App;
