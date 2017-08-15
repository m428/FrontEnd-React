import React from 'react';
import ReactDOM from 'react-dom';
import styles from './FeaturedOne.css'
import TiThumbsUp from 'react-icons/lib/ti/thumbs-up';


class FeaturedOne extends React.Component {
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
            {this.state.featuredProjects.slice(0, 1).map(function(featuredProject){
                console.log(featuredProject)
              return(
              <div className="slide">
                <div className="row">
                  <div className="col-xs-6">
                    <img className={styles.projectImage} src={'http://localhost:8081'+ featuredProject.posterImage} alt="project image" />
                  </div>
                  <div className="col-xs-6">
                    <div className={styles.title}>{featuredProject.title}</div>
                    <div className={styles.description}>{featuredProject.description}</div>
                    <button className={styles.likes}><TiThumbsUp className={styles.thumbsUp}/>{featuredProject.likes} </button>
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

export default FeaturedOne;
