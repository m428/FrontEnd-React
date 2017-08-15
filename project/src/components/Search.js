import React from 'react';
import ReactDOM from 'react-dom';
import styles from './Search.css';
import FaSearch from 'react-icons/lib/fa/search';

class Search extends React.Component {
   render() {
      return (
        <div className={styles.searchBox}>
           <div className={styles.search}><FaSearch className={styles.searchIcon}/><input type="text" className={styles.search} value="Search"/></div>
        </div>
      );
   }
}

export default Search;
