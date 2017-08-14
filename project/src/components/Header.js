import React from 'react';
import ReactDOM from 'react-dom';
import styles from './Header.css';


class Header extends React.Component {
   render() {
      return (
         <div>
            <div className={styles.row}>
              <div className="col-sm-6">
                <img className={styles.logo} src='../../public/images/shaper-logo-white.png' alt="logo" height="60px"/>
              </div>
              <div className="col-sm-6">
                <a href="#" className={styles.button}>New Project</a>
              </div>
              <div className="col-sm-12">
                <h1 className={styles.text}>
                  Share and explore <br /> shaper projects
                </h1>
              </div>
            </div>
         </div>
      );
   }
}

export default Header;
