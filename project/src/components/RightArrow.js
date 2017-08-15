import React from 'react';
import ReactDOM from 'react-dom';
import FaAngleRight from 'react-icons/lib/fa/angle-right';
import styles from './RightArrow.css'



const RightArrow = (props) => {
  return (
    <div onClick={props.nextSlide} className={styles.nextArrow}>
      <FaAngleRight />
    </div>
  );
}

export default RightArrow;
