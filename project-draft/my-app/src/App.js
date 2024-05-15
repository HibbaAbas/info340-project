import React from 'react';

import Cover from './Cover';

import Nav from './Nav';
import Predictions from './Predictions';
import Container from './Container';
// import Calendar from './Calendar';
import Reading from './Reading';
import MoodCheck from './MoodCheck';
// Amartya added-Start
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// END

const App = () => {
  return (
    <div className="app">
      <Nav />
      
      {/* Amartya Added this. Check if it is useful and if it is correct - START */}
      <Switch>
        {/* Renders only the first matching Route based on URL path */}
        <Route path="/" exact component={Cover} />
        {/* Renders 'Cover' component for exact match of root path "/" */}
        <Route path="/predictions" component={Predictions} />
        {/* Renders 'Predictions' for "/predictions" path */}
        <Route path="/container" component={Container} />
        {/* Renders 'Container' for "/container" path */}
        <Route path="/reading" component={Reading} />
        {/* Renders 'Reading' for "/reading" path */}
        <Route path="/mood-check" component={MoodCheck} />
        {/* Renders 'MoodCheck' for "/mood-check" path */}
        {/* Add other routes as necessary */}
      </Switch>
      {/* END */}

      {/* <Cover/> */}
      <Predictions />
      <Container />
      {/* <Calendar/> */}
      {/* <Reading/> */}
      <MoodCheck />


  
    </div>
  );
};
  
  export default App;
