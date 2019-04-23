import React from 'react'
import ReactDOM from 'react-dom'

import {HashRouter as Router, Route, Switch} from 'react-router-dom'

import 'bulma'
import Home from './components/Home'

class App extends React.Component {
  render(){
    return(
      <Router>
        <main>
          <Switch>
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
