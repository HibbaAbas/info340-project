import React from 'react';
import { Routes, Route } from 'react-router-dom';

import { Dashboard } from './Dashboard';
import { Logs } from './Logs';
import { About } from './About';
import {Cover} from './Cover';
import { Stats } from './Stats';

function App(props) {
  return (
    <Routes> 
      <Route path="/" element={<Dashboard />} />
      <Route path="/logs" element={<Logs />} />
      <Route path="/stats" element={<Stats />} />
      <Route path="/about" element={<About />} />
      <Route path="/login" element={<Cover />} />
    </Routes>
  );
};

export default App;