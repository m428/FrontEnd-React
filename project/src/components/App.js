import React from 'react';
import ReactDOM from 'react-dom';
import styles from './App.css';



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

class Header extends React.Component {
   render() {
      return (
         <div>
            <h1>Test Header</h1>
            <div className="row">
              <img src="../public/images/header.png" alt="header" />
              <button type="button" className="btn btn-default">Default</button>

            </div>
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
