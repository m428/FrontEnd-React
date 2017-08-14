import React from 'react';
import ReactDOM from 'react-dom';
import styles from './App.css';
import Header from './Header.js';

class App extends React.Component {
   render() {
      return (
         <div className={styles.app}>
            <Header/>
            <Content/>
         </div>
      );
   }
}


class Content extends React.Component {
   render() {
      return (
         <div>
            <h2>Test Content</h2>
            <p>Some test text!</p>
         </div>
      );
   }
}

export default App;
