import React from 'react'
import styles from './Footer.styl'
const Footer = React.createClass({
  render () {
    return (
      <div className={styles.container}>
        <h1>Words should be an intense pleasure, just as leather should be to a bag.</h1>
        <h2>xotique unique leather bag</h2>
        <a href='https://www.facebook.com/xotiqueofficial/' target='_blank'>
          <img src={require('../home/assets/img/icons/facebook1.png')} />
        </a>
        <a href='https://www.instagram.com/xotique_official/' target='_blank'>
          <img src={require('../home/assets/img/icons/instagram.png')} />
        </a>
      </div>
    )
  }
})

export default Footer
