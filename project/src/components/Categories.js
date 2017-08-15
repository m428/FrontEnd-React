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
     console.log("will we see anything?");
     console.log(this.state.categories);
      return (
         <div>
          <div className={styles.categoryBox}>
          {this.state.categories.map(function(value){
            return(
              <div className={styles.categoryNames}>
                {value}
              </div>
              )
           })}
          </div>
         </div>
      );
   }
}

export default Categories;
