import React from 'react';
import ReactDOM from 'react-dom';
import styles from './featuredTwo.css'



import RightArrow from './RightArrow.js'
import LeftArrow from './LeftArrow.js'


class featuredTwo extends React.Component {
  constructor() {
    super();
    this.state = {
      featuredProjects: [],
    };
  }

  componentDidMount() {
    fetch('http://localhost:8081/featuredProjects')
    .then(response => response.json())
    .then(responseData => {
      this.setState({ featuredProjects: responseData });
      console.log(responseData + "this is the data")

    })
    .catch(error => {
      console.log('error fetching data', error);
    });
  }

   render() {
      return (
         <div className={styles.slide}>
          <div>
            {this.state.featuredProjects.slice(1, 2).map(function(featuredProject){
                console.log(featuredProject)
              return(
              <div className="slide">
                <div className="row">
                  <div className="col-xs-6">
                    <img className={styles.projectImage} src={'http://localhost:8081'+ featuredProject.posterImage} alt="project image" />
                  </div>
                  <div className="col-xs-6">
                    <div>{featuredProject.title}</div>
                    <div>{featuredProject.description}</div>
                    <div>{featuredProject.likes}</div>
                  </div>
                </div>
              </div>
              )
            })}
          </div>
         </div>
      );
   }
}

export default featuredTwo;
