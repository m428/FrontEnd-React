
import React from 'react';
import ReactDOM from 'react-dom';
import styles from './Slider.css'
import FeaturedOne from './FeaturedOne.js'
import FeaturedTwo from './FeaturedTwo.js'
import FeaturedThree from './FeaturedThree.js'

import RightArrow from './RightArrow.js'
import LeftArrow from './LeftArrow.js'

class Slider extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      slideCount: 1
    }
    this.nextSlide = this.nextSlide.bind(this);
    this.previousSlide = this.previousSlide.bind(this);
  }

  render() {
    return (
      <div className="slider">
      <h6 className={styles.title}>awesome projects</h6>
        <div className="row">
          <div className={styles.sliderComponents}>
            <LeftArrow previousSlide={this.previousSlide} />
          </div>
          <div className={styles.sliderComponents}>
            { this.state.slideCount === 1 ? <FeaturedOne className={styles.sliderComponents}/> : null }
          </div>
          <div className={styles.sliderComponents}>
            { this.state.slideCount === 2 ? <FeaturedTwo /> : null }
          </div>
          <div className={styles.sliderComponents}>
            { this.state.slideCount === 3 ? <FeaturedThree /> : null }
          </div>
          <div className={styles.sliderComponents}>
            <RightArrow nextSlide={this.nextSlide} />
          </div>
        </div>
      </div>
    );
  }

  nextSlide() {
      this.setState({ slideCount: this.state.slideCount + 1 })
  }

  previousSlide() {
      this.setState({ slideCount: this.state.slideCount - 1 })
  }
}


export default Slider;
