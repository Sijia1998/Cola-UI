import React, { Component } from 'react';
import store from './store';
import Alter from './components/Alter/Alter';
import styles from './App.less';

class App extends Component {
  render() {
    return <div className={styles['content-inner']}>
      <h1 className="fontStyle">Hello---React-Cli</h1>
      <Alter store={store}></Alter>
    </div>;
  }
}

export default App;
