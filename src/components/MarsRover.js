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
    axios.get('https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&page=2&api_key=0NeW5J5VXCp6NRbCOu6Yv5ANYejzU73uezmTIfTv')
      .then(res => this.setState({data: res.data.photos }))

  }


  render(){
    console.log(this.state.data)
    return(
      <section className='section'>
        <div className='container'>
          <div className='columns is-multiline'>
            {this.state.data.map(datum =>
              <div key={datum.id} className='column is-one-fifth-desktop is-12-tablet'>
                <Link to={`/MarsRover/${datum.id}`} >
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
