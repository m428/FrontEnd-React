import React from 'react';
import ReactDOM from 'react-dom';
import FaAngleLeft from 'react-icons/lib/fa/angle-left';
import styles from './LeftArrow.css'

const LeftArrow = (props) => {
  return (
    <div onClick={props.previousSlide} className={styles.backArrow}>
      <FaAngleLeft className={styles.icon}/>
    </div>
  );
}

export default LeftArrow;
