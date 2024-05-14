import React from 'react';

import Nav from './Nav';
import Predictions from './Predictions';
import Container from './Container';

const App = () => {
    return (
      <div className="app">
        <Nav />
     
       
        <Predictions />
        <Container />
   
      </div>
    );
  };
  
  export default App;
