import React from 'react';
import ReactDOM from 'react-dom';
import styles from './App.css';
import Categories from './Categories.js';
import Header from './Header.js';
import Search from './Search.js';
import Slider from './Carousel/Slider.js'
import Projects from './Projects.js';

class App extends React.Component {
   render() {
      return (
         <div className={styles.app}>
            <Header />
            <Slider />
            <div className={styles.row}>
              <div className={"col-sm-9"}>
                <Categories />
              </div>
              <div className="col-sm-3">
                <Search />
              </div>
            </div>
            <Projects />
         </div>
      );
   }
}

export default App;
