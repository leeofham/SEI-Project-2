import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import DatePicker from 'react-date-picker'

import MarsRoverCard from './MarsRoverCard'

class MarsRover extends React.Component{

  constructor() {
    super()

    this.state = {
      data: [],
      date: new Date()
    }
    this.handleChange = this.handleChange.bind(this)
    this.updateImages = this.updateImages.bind(this)
  }

  componentDidMount(){
    axios.get('https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos', {
      params: {
        earth_date: this.state.date,
        page: 1,
        api_key: '0NeW5J5VXCp6NRbCOu6Yv5ANYejzU73uezmTIfTv'
      }
    })
      .then(res => this.setState({data: res.data.photos }))
  }

  updateImages(){
    axios.get('https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos', {
      params: {
        earth_date: this.state.date,
        page: 1,
        api_key: '0NeW5J5VXCp6NRbCOu6Yv5ANYejzU73uezmTIfTv'
      }
    })
      .then(res => this.setState({data: res.data.photos }))
  }

  handleChange(date) {
    this.setState({ date }, () => this.updateImages())
  }

  render(){

    return(
      <section className='section'>
        <div className='container'>
          <DatePicker
            onChange={this.handleChange}
            value={this.state.date}
            format={'dd-MM-y'}
          />
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
