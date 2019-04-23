import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

import MarsRoverCard from './MarsRoverCard'

class MarsRover extends React.Component{

  constructor() {
    super()

    this.state = {
      data: []
    }
  }

  componentDidMount(){
    axios.get('https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos', {
      params: {
        earth_date: '2018-06-15',
        page: 2,
        api_key: '0NeW5J5VXCp6NRbCOu6Yv5ANYejzU73uezmTIfTv'
      }
    })
      .then(res => this.setState({data: res.data.photos }))
  }

  render(){
    return(
      <section className='section'>
        <div className='container'>
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
