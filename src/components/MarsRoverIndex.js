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
      date: new Date('2019-03-31'),
      stateLoaded: false
    }
    this.handleChange = this.handleChange.bind(this)
    this.updateImages = this.updateImages.bind(this)
    this.randomDatePicker = this.randomDatePicker.bind(this)

  }

  componentDidMount(){
    this.updateImages()
  }

  updateImages(){
    axios.get('https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos', {
      params: {
        earth_date: this.state.date,
        page: 1,
        api_key: '0NeW5J5VXCp6NRbCOu6Yv5ANYejzU73uezmTIfTv'
      }
    })
      .then(res => this.setState({data: res.data.photos, stateLoaded: true }))
  }

  randomDatePicker(){
    const randomYear = Math.floor(Math.random() * 7)
    const randomMonth = Math.ceil(Math.random() * 12)
    const randomDay = Math.ceil(Math.random() * 28)
    const year = 2012 + randomYear

    this.setState({date: `${year}-${randomMonth}-${randomDay}`}, () => this.updateImages())
  }

  handleChange(date) {
    this.setState({ date }, () => this.updateImages())
  }

  render(){
    console.log(this.state.data)
    return(
      <section className='section'>
        <div className='container'>
          <div className='level'>
            {this.state.stateLoaded && <div className="level-left">
              <h2 className="title text-is-bold">{this.state.data[0].rover.name}</h2>
              <p>Launch date: {this.state.data[0].rover.launch_date}</p>
              <p>Landing date: {this.state.data[0].rover.landing_date}</p>
              <p>Status: {this.state.data[0].rover.status}</p>
              <p>Photo total: {this.state.data[0].rover.total_photos}</p>
            </div>}
            <div className='level-right'>
              <DatePicker
                onChange={this.handleChange}
                value={this.state.date}
                format={'dd-MM-y'}
                minDate={new Date(2012, 7, 7)}
                maxDate={new Date(2019, 2, 31)}
              />
              <br /> <br />
              <button className='button is-dark' onClick={this.randomDatePicker}>Random Date</button>
            </div>
          </div>
          <hr />
          <div className='columns is-multiline'>
            {this.state.data.map(datum =>
              <div key={datum.id} className='column is-4-desktop is-6-tablet'>
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

// <p>Camera: {this.state.data.camera.name}</p>
// <p>Earth date: {this.state.data.earth_date}</p>
// <p>Launch date: {this.state.data.rover.launch_date}</p>
// <p>Landing date: {this.state.data.rover.landing_date}</p>
// <p>Status: {this.state.data.rover.status}</p>
// <p>Photo total: {this.state.data.rover.total_photos}</p>
