import React from 'react'
import styles from './productPage.styl'

const images = [
  require('./assets/resize_bags/JPEG/Pack-1135.jpg'),
  require('./assets/resize_bags/JPEG/Pack-1137.jpg'),
  require('./assets/resize_bags/JPEG/Pack-1140.jpg'),
  require('./assets/resize_bags/JPEG/Pack-1146.jpg'),
  require('./assets/resize_bags/JPEG/Pack-1149.jpg'),
  require('./assets/resize_bags/JPEG/Pack-1152.jpg'),
  require('./assets/resize_bags/JPEG/Pack-1154.jpg'),
  require('./assets/resize_bags/JPEG/Pack-1156.jpg'),
  require('./assets/resize_bags/JPEG/Pack-1157.jpg'),
  require('./assets/resize_bags/JPEG/Pack-1161.jpg'),
  require('./assets/resize_bags/JPEG/Pack-1163.jpg'),
  require('./assets/resize_bags/JPEG/Pack-1166.jpg'),
  require('./assets/resize_bags/JPEG/Pack-1167.jpg'),
  require('./assets/resize_bags/JPEG/Pack-1170.jpg'),
  require('./assets/resize_bags/JPEG/Pack-1172.jpg'),
  require('./assets/resize_bags/JPEG/Pack-1175.jpg'),
  require('./assets/resize_bags/JPEG/Pack-1176.jpg'),
  require('./assets/resize_bags/JPEG/Pack-1177.jpg'),
  require('./assets/resize_bags/JPEG/Pack-1137.jpg'),
  require('./assets/resize_bags/JPEG/Pack-1180.jpg'),
  require('./assets/resize_bags/JPEG/Pack-1181.jpg'),
  require('./assets/resize_bags/JPEG/Pack-1184.jpg'),
  require('./assets/resize_bags/JPEG/Pack-1186.jpg'),
  require('./assets/resize_bags/JPEG/Pack-1187.jpg'),
  require('./assets/resize_bags/JPEG/Pack-1191.jpg'),
  require('./assets/resize_bags/JPEG/Pack-1193.jpg'),
  require('./assets/resize_bags/JPEG/Pack-1199.jpg'),
  require('./assets/resize_bags/JPEG/Pack-1203.jpg'),
  require('./assets/resize_bags/JPEG/Pack-1215.jpg'),
  require('./assets/resize_bags/JPEG/Pack-1226.jpg'),
  require('./assets/resize_bags/JPEG/Pack-1230.jpg'),
  require('./assets/resize_bags/JPEG/Pack-1231.jpg'),
  require('./assets/resize_bags/JPEG/Pack-1232.jpg'),
  require('./assets/resize_bags/JPEG/Pack-1233.jpg')
]
const ShowCaseSection = React.createClass({
  renderBlocks () {
    return images.map((x, i) => (
      <div
        key={i}
        className={styles.block}
        style={{
          backgroundImage: `url(${x})`
        }}

      />
    ))
  },
  render () {
    return (
      <div className={styles.container}>
        {this.renderBlocks()}
      </div>
    )
  }
})

export default ShowCaseSection
