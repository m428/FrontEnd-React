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
         <div>
          <div>
            {this.state.featuredProjects.slice(0, 1).map(function(featuredProject){
              return(
              <div className="w3-content w3-display-container">
                <div className="mySlides">
                  <div>{featuredProject.title}</div>
                  <div>{featuredProject.description}</div>
                  <div>{featuredProject.likes}</div>
                  <img className={styles.projectImage} src={'http://localhost:8081'+ featuredProject.posterImage} alt="project image" />
                </div>
                <button className="w3-button w3-black w3-display-left" onClick="plusDivs(-1)">&#10094;</button>
                <button className="w3-button w3-black w3-display-right" onClick="plusDivs(1)">&#10095;</button>
              </div>
              )
            })}
          </div>
         </div>
      );
   } // end render()

    carosel() {
       var slideIndex = 1;
       showDivs(slideIndex);

       function plusDivs(n) {
         showDivs(slideIndex += n);
       }

       function showDivs(n) {
         var i;
         var x = document.getElementsByClassName("mySlides");
         if (n > x.length) {slideIndex = 1}
         if (n < 1) {slideIndex = x.length}
         for (i = 0; i < x.length; i++) {
            x[i].style.display = "none";
         }
         x[slideIndex-1].style.display = "block";
       }
    }


} //end of component

export default Featured;
