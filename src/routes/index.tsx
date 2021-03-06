import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from '../pages/Home'
import { GlobalStyle } from '../styles/global'

const Routes: React.FC = () => (
  <>
    <Switch>
      <Route path="/" exact component={Home} />
    </Switch>
    <GlobalStyle />
  </>
)

export default Routes
