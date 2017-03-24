import '../../node_modules/slick-carousel/slick/slick.css'
import '../../node_modules/slick-carousel/slick/slick-theme.css'

import React from 'react'
import Slider from 'react-slick'
import styles from './TopSectionSlider.styl'

const SLIDEIMAGES = [
  require('./assets/resize_bags/JPEG/S01-0060.jpg'),
  require('./assets/resize_bags/JPEG/S14-0900.jpg'),
  require('./assets/resize_bags/JPEG/S02-0126.jpg')
]

const HomePage = React.createClass({
  renderSlide (image) {
    return (
      <div
        className={styles.slideContainer}
        style={{
          backgroundImage: `url(${image})`,
          backgroundSize: 'cover',
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
        slidesToShow={3}
      >
        {SLIDEIMAGES.map(x => this.renderSlide(x))}
      </Slider>
    )
  },
  render () {
    return (
      this.renderSlideShow()
    )
  }
})

export default HomePage
