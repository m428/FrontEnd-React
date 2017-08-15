import React from 'react';
import ReactDOM from 'react-dom';
import styles from './App.css';
import Categories from './Categories.js';
import Header from './Header.js';
import Featured from './Featured.js';
import Search from './Search.js';
import Projects from './Projects.js';

class App extends React.Component {
   render() {
      return (
         <div className={styles.app}>
            <Header />
            <Featured />
            <div className="row">
              <div className="col-sm-6">
                <Categories />
              </div>
              <div className="col-sm-6">
                <Search />
              </div>
            </div>
            <Projects />
         </div>
      );
   }
}

export default App;
