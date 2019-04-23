import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

import MarsRoverCard from './MarsRoverCard'

class MarsRover extends React.Component{

  constructor() {
    super()

    this.state = {
      data: [],
      date: '2018-03-07'
    }
    this.handleChange = this.handleChange.bind(this)
    this.updateImages = this.updateImages.bind(this)
  }

  updateImages(){
    axios.get('https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos', {
      params: {
        earth_date: this.state.date,
        page: 2,
        api_key: '0NeW5J5VXCp6NRbCOu6Yv5ANYejzU73uezmTIfTv'
      }
    })
      .then(res => this.setState({data: res.data.photos }))
  }

  handleChange(e){
    const date = e.target.value
    this.setState({date})
    this.updateImages()
  }

  render(){
    this.updateImages()
    return(
      <section className='section'>
        <div className='container'>
          <input type='date' onChange={this.handleChange} />
          <div className='columns is-multiline'>
            {this.state.data.map(datum =>
              <div key={datum.id} className='column is-one-fifth-desktop is-12-tablet'>
                <Link to={{
                  pathname: `/marsrover/${datum.id}`,
                  state: datum
                }}>
                  <MarsRoverCard {...datum}/>
                </Link>
              </div>
            )}
          </div>
        </div>
      </section>
    )
  }
}

export default MarsRover
