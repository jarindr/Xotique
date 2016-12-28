import { IndexRoute, Route } from 'react-router'

import HomePage from '../src/home/Homepage'
import Layout from '../src/layouts/layout'
import React from 'react'

export default (
  <div>
    {/* main pages */}
    <Route path='/' component={Layout}>
      <IndexRoute component={HomePage} />
    </Route>
  </div>
)
