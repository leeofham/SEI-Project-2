import React from 'react'

import axios from 'axios'

class MarsRover extends React.Component{

  constructor() {
    super()

    this.state = {
      data: null
    }
  }

  componentDidMount(){
    axios.get('https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=0NeW5J5VXCp6NRbCOu6Yv5ANYejzU73uezmTIfTv')
      .then(res => this.setState({data: res.data }))

  }


  render(){
    console.log(this.state.data)
    return(
      <section className='section'>
        <div className='container'>
          <h1>Hello</h1>
          {this.state.data && <img src={this.state.data.photos[0].img_src} alt='test image' /> }
        </div>
      </section>
    )
  }
}

export default MarsRover
