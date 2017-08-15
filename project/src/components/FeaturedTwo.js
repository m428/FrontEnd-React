import React from 'react';
import ReactDOM from 'react-dom';
import styles from './FeaturedTwo.css'

class FeaturedTwo extends React.Component {
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
              <div>
                <div>
                  <h1>{featuredProject.title}</h1>
                  <div>{console.log(featuredProject.title)}</div>

                  <div>{featuredProject.description}</div>
                  <div>{featuredProject.likes}</div>
                  <img className={styles.projectImage} src={'http://localhost:8081'+ featuredProject.posterImage} alt="project image" />
                </div>
              </div>
              )
            })}
          </div>
         </div>
      );
   } // end render()

} //end of component

// console.log(this)
export default FeaturedTwo;
