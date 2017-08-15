import React from 'react';
import ReactDOM from 'react-dom';
import styles from './App.css';
import Categories from './Categories.js';
import Header from './Header.js';
import Featured from './Featured.js';


class App extends React.Component {
   render() {
      return (
         <div className={styles.app}>
            <Header />
            <Featured />
            <Categories />
         </div>
      );
   }
}

export default App;
