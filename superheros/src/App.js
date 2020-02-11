import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Home from '../components/Home'
import Heros from '../components/Heros'
import CreateHero from '../components/CreateHero'

const App = () => (
  <React.Fragment>
    <Switch>
    <Route exact path='/' component={Home}/>
    <Route exact path='/heros' component={Heros}/>
    <Route exact path='/createHero' component={CreateHero}/>
    </Switch>
  </React.Fragment>
)

export default App;
