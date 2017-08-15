import React from 'react';
import ReactDOM from 'react-dom';
import styles from './Categories.css';

class Categories extends React.Component {
  constructor() {
    super();
    this.state = {
      categories: [],
    };
  }

  componentDidMount() {
    fetch('http://localhost:8081/categories')
    .then(response => response.json())
    .then(responseData => {
      this.setState({ categories: responseData });
    })
    .catch(error => {
      console.log('error fetching data', error);
    });
  }

   render() {
     console.log(this.state.categories);
      return (
         <div>
          <div className={styles.categoryContainer}>
            <div className="col-xs-3">
              <div className={styles.categoryNames}>All</div>
            </div>
            {this.state.categories.slice(0, 3).map(function(value){
            return(
              <div className="col-xs-3">
                <div className={styles.categoryNames}>
                  {value}
                </div>
              </div>
                )
              })}
          </div>
         </div>
      );
   }
}

export default Categories;
