import React from 'react'
import ReactDOM from 'react-dom'

import 'bulma'

class App extends React.Component {
  render(){
    return(
      <h1>Silly Sausage</h1>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
