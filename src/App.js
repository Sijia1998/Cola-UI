import React, { Component } from 'react';
import Alter from './components/Alter/Alter';
import './App.less';

class App extends Component {
  render() {
    return <div>
      <h1 className="fontStyle">Hello---React-Cli</h1>
      <Alter position="center"
          title="welcome you"
      ></Alter>
    </div>;
  }
}

export default App;
