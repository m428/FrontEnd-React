import React from 'react';
import ReactDOM from 'react-dom';
import styles from './Featured.css';

class Featured extends React.Component {
  constructor() {
    super();
    this.state = {
      featuredProjects: [],
    };
  }

  componentDidMount() {
    fetch('http://localhost:8081/featuredProjects')
    .then(response => response.json() )
    .then(responseData => {
      this.setState({ featuredProjects: responseData });
    })
    .catch(error => {
      console.log('error fetching data', error);
    });
  }

   render() {
     console.log("will we see anything?");
     console.log(this.state.featuredProjects);
      return (
         <div>
          <ul>
            {this.state.featuredProjects.map(function(listValue){
              return(
                <div>
                  <li>{listValue.title}</li>
                  <li>{listValue.description}</li>
                </div>
              )
            })}
          </ul>
         </div>
      );
   }
}

export default Featured;
