import '../../node_modules/slick-carousel/slick/slick.css'
import '../../node_modules/slick-carousel/slick/slick-theme.css'

import React from 'react'
import ShowCaseSection from './ShowCaseSection'
import TopSectionSlider from './TopSectionSlider'
import styles from './Homepage.styl'

const HomePage = React.createClass({
  render () {
    return (
      <div className={styles.container}>
        <TopSectionSlider />
        <div className={styles.ContentSectionContainer}>
          <h1>THE XOTIQUE</h1>
          <h3>unique leather bag</h3>
          <p>
            Stay tuned, we are under construction
          </p>
        </div>
        <ShowCaseSection />
      </div>
    )
  }
})

export default HomePage
