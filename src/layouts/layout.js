import './Layout.global.styl'

import Footer from '../components/Footer'
import Helmet from 'react-helmet'
import NavBar from '../components/NavBar'
import React from 'react'

const Layout = React.createClass({
  propTypes: {
    children: React.PropTypes.element
  },
  render () {
    return (
      <div>
        <Helmet
          titleTemplate=''
          defaultTitle=''
          script={[
            {innerHTML: require('raw!../FontLoader.js'), 'type': 'text/javascript'}
          ]}
          link={[
            {href: 'https://fonts.googleapis.com/css?family=Slabo+27px|Roboto|Lato|Abel', rel: 'stylesheet'}
          ]}
          meta={[
          ]}
        />
        <NavBar />
        {this.props.children}
        <Footer />
      </div>
    )
  }
})

export default Layout
