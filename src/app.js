import React from 'react'
import ReactDOM from 'react-dom'

import {HashRouter as Router, Route, Switch} from 'react-router-dom'

import 'bulma'

import './style.scss'

import Home from './components/Home'
import MarsRover from './components/MarsRover'
import MarsRoverShow from './components/MarsRoverShow'
import Navbar from './components/Navbar'

class App extends React.Component {
  render(){
    return(
      <Router>
        <Navbar />
        <main>
          <Switch>
            <Route path="/marsrover/:id" component={MarsRoverShow} />
            <Route path="/marsrover" component={MarsRover} />
            <Route path="/" component={Home} />
          </Switch>
        </main>
      </Router>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
