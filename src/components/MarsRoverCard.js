import React from 'react'

const MarsRoverCard = (props) => {
  return(
    <div className={`card ${props.id}`}>
      <div className="card-header">
        <h3 className="card-header-title">Date: {props.earth_date}</h3>
      </div>
      <div className="card-image">
        <figure className="image">
          <img src={props.img_src} alt={props.rover.name} />
        </figure>
      </div>
      <div className="card-content">
        <h4 className="is-3">{props.camera.full_name}</h4>
        <h5 className="is-3">{props.rover.name}</h5>
      </div>
    </div>
  )
}

export default MarsRoverCard
// <img src={this.state.data.photos[0].img_src} alt='test image' />

//
