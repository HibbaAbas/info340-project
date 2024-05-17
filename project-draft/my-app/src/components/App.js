import React from 'react';

import { Dashboard } from './Dashboard';
import { Logs } from './Logs';
import { About } from './About';
import {Cover} from './Cover';

function App(props) {
  return (
    <div>
      {/*<Dashboard /> */}
      <Logs />  
      {/* <About /> */}
      {/* <Cover /> */}
    </div>
  );
};

export default App;