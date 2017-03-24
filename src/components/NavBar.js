import React from 'react'
import styles from './NavBar.styl'

const NavBar = React.createClass({
  render () {
    return (
      <div className={styles.container}>
        <img src={require('../home/assets/logo_svg (1).png')} />
        <div className={styles.navigations}>
          <ul>
            <li>about us</li>
            <li>our product</li>
            <li>stores</li>
            <li>contact us</li>
          </ul>
        </div>
      </div>
    )
  }
})

export default NavBar
