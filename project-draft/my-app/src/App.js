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
      <Route path="/" exact component={Cover} />
          <Route path="/predictions" component={Predictions} />
          <Route path="/container" component={Container} />
          <Route path="/reading" component={Reading} />
          <Route path="/mood-check" component={MoodCheck} />
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
