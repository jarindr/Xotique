import React, { PropTypes } from 'react'

import styles from './NavBar.styl'

const NavBar = React.createClass({
  render () {
    return (
      <div className={styles.container}>
        <img src={require('../home/assets/logo_svg (1).png')} />
      </div>
    )
  }
})

export default NavBar
