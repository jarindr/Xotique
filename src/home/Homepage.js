import '../../node_modules/slick-carousel/slick/slick.css'
import '../../node_modules/slick-carousel/slick/slick-theme.css'

import React from 'react'
import TopSectionSlider from './TopSectionSlider'
import styles from './Homepage.styl'

const HomePage = React.createClass({
  render () {
    return (
      <div className={styles.container}>
        <TopSectionSlider />
        <div className={styles.ContentSectionContainer}>
          <h1>
            XOTIQUE
          </h1>
          <h3>
            UNIQUE LEATHER BAG
          </h3>
        </div>
      </div>
    )
  }
})

export default HomePage
