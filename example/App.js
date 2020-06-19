import React from 'react';

import Testing from "./testing";
import DarkMode from './darkmode'

class App extends React.Component {
  render() {
    return <DarkMode default="" h2="orange">
      <Testing />
    </DarkMode>
    }
}



export default App;
