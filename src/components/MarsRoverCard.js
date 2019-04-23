import React from 'react'

const MarsRoverCard = (props) => {
  return(
    <div className="card">
      <div className="card-header">
        <h3 className="card-header-title">{props.rover.name}</h3>
      </div>
      <div className="card-image">
        <figure className="image">
          <img src={props.img_src} alt={props.rover.name} />
        </figure>
      </div>
      <div className="card-content">
        <p>{props.earth_date}</p>
      </div>
    </div>
  )
}

export default MarsRoverCard
// <img src={this.state.data.photos[0].img_src} alt='test image' />

//
