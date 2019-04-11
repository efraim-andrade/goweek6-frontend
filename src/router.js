import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Main from "./pages/Main"
import Box from "./pages/Box"

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route component={Main} path="/" exact />
      <Route component={Box} path="/box/:id" />
    </Switch>
  </BrowserRouter>
)

export default Routes
