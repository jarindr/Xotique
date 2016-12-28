import '../../node_modules/slick-carousel/slick/slick.css'
import '../../node_modules/slick-carousel/slick/slick-theme.css'

import React from 'react'
import Slider from 'react-slick'
import styles from './Homepage.styl'

const SLIDEIMAGES = [require('./assets/bags/S12-0582.jpg')]
const HomePage = React.createClass({
  renderSlide (image) {
    return (
      <div
        className={styles.slideContainer}
        style={{
          backgroundImage: `url(${image})`,
          backgroundSize: '100%',
          backgroundPosition: 'center'
        }}
      >
      </div>
    )
  },
  renderSlideShow () {
    return (
      <Slider
        infinite
        speed='500'
        autoplay
        fade
        swipeToSlide={false}
        draggable={false}
        autoplaySpeed='3000'
      >
        {SLIDEIMAGES.map(x => this.renderSlide(x))}
      </Slider>
    )
  },
  render () {
    return (
      <div className={styles.container}>
        {this.renderSlideShow()}
      </div>
    )
  }
})

export default HomePage
