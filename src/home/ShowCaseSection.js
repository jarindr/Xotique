import React from 'react'
import styles from './ShowCaseSection.styl'

const IMAGES = [
  require('./assets/resize_bags/JPEG/Pack-1135.jpg'),
  require('./assets/resize_bags/JPEG/Pack-1137.jpg'),
  require('./assets/resize_bags/JPEG/Pack-1140.jpg'),
  require('./assets/resize_bags/JPEG/Pack-1166.jpg'),
  require('./assets/resize_bags/JPEG/Pack-1154.jpg'),
  require('./assets/resize_bags/JPEG/Pack-1156.jpg'),
  require('./assets/resize_bags/JPEG/Pack-1146.jpg'),
  require('./assets/resize_bags/JPEG/Pack-1187.jpg')
]

const ShowCaseSection = React.createClass({
  renderBlockImage (image) {
    return (
      <div
        className={styles.blockImageContainer}
        style={{
          backgroundImage: `url(${image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
      </div>
    )
  },
  render () {
    return (
      <div className={styles.container}>
        {IMAGES.map(x => this.renderBlockImage(x))}
      </div>
    )
  }
})

export default ShowCaseSection
