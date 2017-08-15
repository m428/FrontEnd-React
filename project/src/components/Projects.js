import React from 'react';
import ReactDOM from 'react-dom';
import styles from './Projects.css';

class Projects extends React.Component {
  constructor() {
    super();
    this.state = {
      projectsList: [],
    };
  }

  componentDidMount() {
    fetch('http://localhost:8081/projects')
    .then(response => response.json())
    .then(responseData => {
      this.setState({ projectsList: responseData });
    })
    .catch(error => {
      console.log('error fetching data', error);
    });
  }

  render() {
     return (
        <div>
         <div className={styles.projectContainer}>
           {this.state.projectsList.slice(0, 9).map(function(project){
             return(
              <div className="col-xs-4">
                <div className={styles.project}>
                 <img className={styles.projectImage} src={'http://localhost:8081'+ project.posterImage} alt="project image" />
                 <button className={styles.likes}> <span className={styles.thumbsUp}><span className="glyphicon glyphicon-thumbs-up"></span></span> {project.likes} </button>
                 <div>{project.title}</div>
               </div>
              </div>
             )
           })}
         </div>
        </div>
     );
  }
}

export default Projects;
