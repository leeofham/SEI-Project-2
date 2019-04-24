import React from 'react'
import MarsRoverCarousel from './MarsRoverCarousel'

import {Link} from 'react-router-dom'

import Store from '../lib/Store'


class MarsRoverShow extends React.Component{

  constructor(props) {
    super(props)

    this.state = {
      datum: this.props.location.state || Store.getStore()
    }
    this.stringifyDatum = this.stringifyDatum.bind(this)
  }

  stringifyDatum(){
    const datum = JSON.stringify(this.state.datum)
    Store.setStore(datum)
  }

  render(){
    this.stringifyDatum()
    return(
      <div className="mainContainer">
        <section className="section">
          <div className="container">
            <Link to='/marsrover' className='button carousel-button is-dark'> Back </Link>
            <div className="columns is-multiline">
              <div className="column is-8">
                <figure className="image">
                  <img src={this.state.datum.img_src} alt="image" />
                </figure>
              </div>
              <div className="column is-4">
                <h2 className="title text-is-bold">{this.state.datum.rover.name}</h2>
                <hr />
                <p>Camera: {this.state.datum.camera.name}</p>
                <p>Earth date: {this.state.datum.earth_date}</p>
                <p>Launch date: {this.state.datum.rover.launch_date}</p>
                <p>Landing date: {this.state.datum.rover.landing_date}</p>
                <p>Status: {this.state.datum.rover.status}</p>
                <p>Photo total: {this.state.datum.rover.total_photos}</p>
              </div>
            </div>
          </div>
        </section>
        <MarsRoverCarousel />
      </div>
    )
  }
}

export default MarsRoverShow
