import React from 'react';
import ReactDOM from 'react-dom';


class App extends React.Component {
   render() {
      return (
         <div>
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
