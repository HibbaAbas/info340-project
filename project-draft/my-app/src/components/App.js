import React from 'react';

import { Dashboard } from './Dashboard';
import { Logs } from './Logs';
import { About } from './About';
import {Cover} from './Cover';
import { Stats } from './Stats';

function App(props) {
  return (
    <div>
      {/*<Dashboard /> */}
      {/* <Logs />  */}
      {/* <About /> */}
       <Cover /> 
      {/* <Stats /> */}
    </div>
  );
};

export default App;