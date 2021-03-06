import { IndexRoute, Route } from 'react-router'

import HomePage from '../src/home/Homepage'
import Layout from '../src/layouts/layout'
import ProductPage from '../src/home/productPage'
import React from 'react'
import StorePage from '../src/home/StorePage'

export default (
  <Route path='/' component={Layout}>
    <IndexRoute component={HomePage} />
    <Route path='product' component={ProductPage} />
    <Route path='store' component={StorePage} />
  </Route>
)
