import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Home from './components/Home'
import Heros from './components/Heros'
import CreateHero from './components/CreateHero'
import Hero from './components/Hero'
import HeroEdit from'./components/HeroEdit'

const App = () => (
  <>
    <Switch>
    <Route exact path='/' component={Home}/>
    <Route exact path='/heros' component={Heros}/>
    <Route exact path='/createHero' component={CreateHero}/>
    <Route exact path='/heros/:id' component={Hero}/>
    <Route exact path='/heros/:id/edit' component={HeroEdit}/>
    </Switch>
  </>
)

export default App;
