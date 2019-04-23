import React from 'react'
import axios from 'axios'

class MarsRoverShow extends React.Component{

  constructor(props) {
    super(props)

    this.state = {
      datum: [],
      stateLoaded: null
    }
  }

  componentDidMount() {
    axios.get('https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=2018-06-15&page=2&api_key=0NeW5J5VXCp6NRbCOu6Yv5ANYejzU73uezmTIfTv')
      .then(res => this.setState({ datum: res.data.photos }))
      .then(() => this.setState({ stateLoaded: true }))
  }

  render(){
    console.log('this is the state', this.state.datum)
    return(
      <section className="section">
        <div className="container">
          <div className="columns is-multiline">
            <div className="column is-6">
              <img src="" alt="image" />
            </div>
            <div className="column is-6">
              {this.state.stateLoaded && <h2>{this.state.datum[0].rover.name}</h2> }

            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default MarsRoverShow
